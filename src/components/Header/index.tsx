import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  numCreated: number,
  setNumCreated: Dispatch<SetStateAction<number>>,
  assignmentList: Array<{id: number; title: string;}>,
  setAssignmentList: Dispatch<SetStateAction<Array<{id: number; title: string;}>>>
  myId: number;
  setMyId: Dispatch<SetStateAction<number>>;
}
export function Header({numCreated, setNumCreated, assignmentList, setAssignmentList, myId, setMyId}: Props) {

  const [myInput, setMyInput] = useState("");
  const [isClickable, setIsClickable] = useState(false);
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" value={myInput} 
        onChange={e => {
          if(e.target.value.trim().length === 0) {
            setIsClickable(false);
            setMyInput("");
          }
          else {
            setIsClickable(true);
            setMyInput(e.target.value);
          }
        }}/>

        <button disabled={!isClickable} onClick={(e) => {
          e.preventDefault();
          myId += 1;
          setMyId(myId);
          assignmentList.push({id: myId, title: myInput});
          setAssignmentList(assignmentList);
          setNumCreated(numCreated + 1);
          setMyInput("");
          setIsClickable(false);
        }}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
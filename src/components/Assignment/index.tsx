import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

import { TbCircle } from "react-icons/tb"; // task list circle
import { TbCircleCheckFilled } from "react-icons/tb"; // task list check mark

import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  numCreated: number,
  setNumCreated: Dispatch<SetStateAction<number>>,
  numCompleted: number,
  setNumCompleted: Dispatch<SetStateAction<number>>,
  assignmentList: Array<{id: number; title: string;}>,
  setAssignmentList: Dispatch<SetStateAction<Array<{id: number; title: string;}>>>
  assignment: {id: number; title: string;};
}

export function Assignment({numCreated, setNumCreated, numCompleted, setNumCompleted, assignmentList, setAssignmentList, assignment}: Props) {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} 
      onClick={() => { 
        if (isCompleted) {
          setIsCompleted(false);
          setNumCompleted(numCompleted - 1);
        }
        else {
          setIsCompleted(true);
          setNumCompleted(numCompleted + 1);
        }
      }}>
        {isCompleted ? <TbCircleCheckFilled /> : <TbCircle />};
      </button>

      <p className={isCompleted ? styles.textCompleted : styles.p}>{assignment.title}</p>

      <button className={styles.deleteButton} 
      onClick={() => {
        setNumCreated(numCreated - 1);
        // remove assignment from list
        setAssignmentList(assignmentList.filter(as => as.id!==assignment.id));
      }}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

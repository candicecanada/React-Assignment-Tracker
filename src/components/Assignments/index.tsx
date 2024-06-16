import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  numCreated: number,
  setNumCreated: Dispatch<SetStateAction<number>>,
  assignmentList: Array<{id: number; title: string;}>,
  setAssignmentList: Dispatch<SetStateAction<Array<{id: number; title: string;}>>>
}
export function Assignments({numCreated, setNumCreated, assignmentList, setAssignmentList}:Props) {
  const [numCompleted, setNumCompleted] = useState(0);
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{numCreated}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{numCompleted} of {numCreated}</span>
        </div>
      </header>

      <div className={styles.list}>
        
          {assignmentList.map(assignment => {
            return (
              <div key={assignment.id}>
                <Assignment numCreated={numCreated} setNumCreated={setNumCreated} numCompleted={numCompleted} setNumCompleted={setNumCompleted} assignmentList={assignmentList} setAssignmentList={setAssignmentList} assignment={assignment}/>
              </div>
            );
          })}

      </div>
    </section>
  );
}

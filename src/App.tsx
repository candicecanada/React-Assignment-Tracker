import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [numCreated, setNumCreated] = useState(1);
  const [myId, setMyId] = useState(0);
  const [assignmentList, setAssignmentList] = useState([{id: myId, title: "Some Title"}]);
  return (
    <>
      <Header numCreated={numCreated} setNumCreated={setNumCreated} assignmentList={assignmentList} setAssignmentList={setAssignmentList} myId={myId} setMyId={setMyId}/>
      <Assignments numCreated={numCreated} setNumCreated={setNumCreated} assignmentList={assignmentList} setAssignmentList={setAssignmentList}/>
    </>
  );
}

export default App;

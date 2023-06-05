import { Fragment , useState } from "react";
import Header from "./componets/task/Header"
import TaskList from "./componets/task/TaskList";

function App() {
  const[todos , setTodos]= useState([
    {id: 1, taskName : 'task 1', isDone : false}
    {id: 2, taskName : 'task 2', isDone : true}
  ])
  return (
    <Fragment>
      {/* header */}
      <Header />


      {/* tasklist section */}
      <TaskList todos={todos} />

    </Fragment>
    
  );
}

export default App;

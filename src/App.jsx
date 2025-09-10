import Action from "./component/todo/todoAction"
import ImageTodo from "./component/todo/todoImage"
import Data from "./component/todo/todoData"
import "./component/todo/todostyle.css"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  const [toDoList, setToDoList] = useState([]);

  const toDoNew = (name) => {
    const data = { id: randomIntFromInterval(1, 1000000), name: name }
    setToDoList([...toDoList, data]);
  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do List</h1>
      <Action
        toDoNew={toDoNew}
      />
      <Data
        toDoList={toDoList}
      />
      <ImageTodo
        src-img={reactLogo}
      />
    </div>
  )
}

export default App

import Action from "./component/todo/todoAction"
import ImageTodo from "./component/todo/todoImage"
import Data from "./component/todo/todoData"
import "./component/todo/todostyle.css"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  const [toDoList, setToDoList] = useState([{ name: "Thuan", address: "HG" },
  { name: "Hieu", address: "HG" }]);

  const people = { name: 'Thuan', address: 'Thuan An, CT city' };
  const toDoNew = (name) => {
    // console.log(`My name is ${name}`);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do List</h1>
      <Action />
      <Data
        // name={people.name}
        // address={people.address}
        people={people}
        toDoNew={toDoNew}
        toDoList={toDoList}
      />
      <ImageTodo
        src-img={reactLogo}
      />
    </div>
  )
}

export default App

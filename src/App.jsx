import Action from "./component/todo/todoAction"
import ImageTodo from "./component/todo/todoImage"
import Data from "./component/todo/todoData"
import "./component/todo/todostyle.css"
import reactLogo from "./assets/react.svg"

const App = () => {

  const people = { name: 'Thuan', address: 'Thuan An, CT city' };

  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do List</h1>
      <Action />
      <Data
        name={people.name}
        address={people.address}
      />
      <ImageTodo
        src-img={reactLogo}
      />
    </div>
  )
}

export default App

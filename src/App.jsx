import Action from "./component/todo/todoAction"
import ImageTodo from "./component/todo/todoImage"
import "./component/todo/todostyle.css"

const App = () => {

  return (
    <div className="todo-container">
      <h1 className="todo-title">To Do List</h1>
      <Action />
      <ImageTodo />
    </div>
  )
}

export default App

import Action from "./todoAction"
import ImageTodo from "./todoImage"
import Data from "./todoData"
import "./todostyle.css"
import reactLogo from "../../assets/react.svg"
import { useState } from "react"

const ToDoApp = () => {

    // Add
    const [toDoList, setToDoList] = useState([]);

    const toDoNew = (name) => {
        const data = { id: randomIntFromInterval(1, 1000000), name: name }
        setToDoList([...toDoList, data]);
    }
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    // Delete
    const deleteData = (id) => {
        setToDoList([...toDoList].filter((curData) => curData.id !== id));
    }

    return (
        <div className="todo-container">
            <h1 className="todo-title">To Do List</h1>

            <Action
                toDoNew={toDoNew}
            />

            {toDoList.length === 0 ?
                <ImageTodo
                    src-img={reactLogo}
                />
                :
                <Data
                    toDoList={toDoList}
                    deleteData={deleteData}
                />
            }
        </div>
    );
}

export default ToDoApp;
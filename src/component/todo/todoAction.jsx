import { useState } from "react";


const Action = ({ toDoNew }) => {

    const [valueInput, setValueInput] = useState("");
    const handleChange = (event) => {
        setValueInput(event.target.value);
    }
    const clickToGetData = () => {
        toDoNew(valueInput);
        setValueInput("");
    }

    return (
        <div className="confirm-container">
            <input onChange={handleChange} value={valueInput} type="text" placeholder="Enter your task" />
            <button onClick={clickToGetData} type="button">Add</button>
        </div>

    );
}

export default Action;
import { useState } from "react";


const Action = ({ toDoNew }) => {

    const [valueInput, setValueInput] = useState("");
    const handleChange = (value) => {
        setValueInput(value);
    }
    const clickToGetData = () => {
        toDoNew(valueInput);
        setValueInput("");
    }

    return (
        <div className="confirm-container">
            <input onChange={(event) => { handleChange(event.target.value) }} value={valueInput} type="text" placeholder="Enter your task" />
            <button onClick={() => { clickToGetData() }} type="button">Add</button>
        </div>

    );
}

export default Action;
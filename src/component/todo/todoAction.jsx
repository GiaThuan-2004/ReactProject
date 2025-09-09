import { useState } from "react";


const Action = () => {

    const [valueInput, setValueInput] = useState("");
    const handleChange = (event) => {
        setValueInput(event.target.value);
    }
    const clickToGetData = () => {
        console.log(valueInput);
    }

    return (
        <div className="confirm-container">
            <input onChange={handleChange} type="text" placeholder="Enter your task" />
            <button onClick={clickToGetData} type="button">Add</button>
            <div
                style={{ fontSize: "2rem" }}
            >Text in input bar: {valueInput}</div>
        </div>
    );
}

export default Action;
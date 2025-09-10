
const Data = ({toDoList }) => {
    return (
        <div className="data-container">
            {toDoList.map((data) => {
                return (
                    <div className="todo-item">
                        <div className="text">{data.name}</div>
                        <button type="button">Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Data;
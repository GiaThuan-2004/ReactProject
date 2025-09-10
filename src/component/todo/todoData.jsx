
const Data = ({ toDoList, deleteData }) => {
    return (
        <div className="data-container">
            {toDoList.map((data) => {
                return (
                    <div className="todo-item" key={data.id}>
                        <div className="text">{data.name}</div>
                        <button onClick={() => {deleteData(data.id)}} type="button">Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Data;
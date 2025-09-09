
const Data = ({ people, toDoNew, toDoList }) => {
    // console.log(props.people);

    //test truyen du lieu bang obj
    // console.log(props.toDoNew);
    const { name, address } = people;
    // const toDoNew = props.toDoNew;
    toDoNew(name);
    return (
        <div className="data-container">
            <p>My name is {name}</p>
            <p>From: {address}</p>
            <p>{JSON.stringify(toDoList)}</p>
        </div>
    );
}

export default Data;
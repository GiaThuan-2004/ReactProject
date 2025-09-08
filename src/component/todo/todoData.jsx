
const Data = (props) => {
    const { name, address } = props;
    return (
        <div className="data-container">
            <p>My name is {name}</p>
            <p>From: {address}</p>
        </div>
    );
}

export default Data;
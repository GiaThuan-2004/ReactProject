import reactLogo from "../../assets/react.svg"

const ImageTodo = (props) => {
    return (
        <div className="icon-container">
            <img src={props['src-img']} alt="react" className="icon-react" />
        </div>
    );
}

export default ImageTodo;
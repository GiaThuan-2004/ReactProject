import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-list">
                <Link  className="list-item active" to="/">Home</Link>
                <Link className="list-item" to="/products">Product</Link>
                <Link className="list-item" to="/users">Users</Link>
            </div>
            <div className="login-register">
                <a href="/login" className="btn">Login</a>
                <a href="/register" className="btn">Register</a>
            </div>
        </div>
    );
}

export default Header;
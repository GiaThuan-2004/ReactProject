import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-list">
                <NavLink className="list-item" to="/">Home</NavLink>
                <NavLink className="list-item" to="/products">Product</NavLink>
                <NavLink className="list-item" to="/users">Users</NavLink>
            </div>
            <div className="login-register">
                <a href="/login" className="btn">Login</a>
                <a href="/register" className="btn">Register</a>
            </div>
        </div>
    );
}

export default Header;
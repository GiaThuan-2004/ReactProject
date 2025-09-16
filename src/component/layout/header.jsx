import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <div className="navbar">
            <div className="nav-list">
                <NavLink className="list-item" to="/">Home</NavLink>
                <NavLink className="list-item" to="/books">Books</NavLink>
                <NavLink className="list-item" to="/users">Users</NavLink>
            </div>
            <div className="login-register">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </div>
    );
}

export default Header;
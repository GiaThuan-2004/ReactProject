import "./header.css"

const Header = () => {
    return (
        <div className="navbar">
            <ul className="nav-list">
                <li className="list-item"><a href="/">Home</a></li>
                <li className="list-item"><a href="/products">Product</a></li>
                <li className="list-item"><a href="/users">Users</a></li>
            </ul>
            <div className="login-register">
                <a href="/login" className="btn">Login</a>
                <a href="/register" className="btn">Register</a>
            </div>
        </div>
    );
}

export default Header;
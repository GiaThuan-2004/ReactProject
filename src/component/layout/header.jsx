import { Link, NavLink } from "react-router-dom";
import { Menu } from 'antd';
import { useContext, useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { AuthContext } from "../context/auth.context";

const items = [
    {
        key: 'home',
        label: (
            <Link to="/">Home</Link>
        ),
        icon: <HomeOutlined />
    },
    {
        key: 'books',
        label: (
            <Link to="/books">Books</Link>
        ),
        icon: <BookOutlined />
    },
    {
        key: 'users',
        label: (
            <Link to="/users">Users</Link>
        ),
        icon: <UserOutlined />
    },
    {
        label: 'Settings',
        key: 'setting',
        icon: <SettingOutlined />,
        children: [
            {
                key: 'login',
                label: (<Link style={{ color: "black", display: "block" }} to="/login">Login</Link>)
            },
            {
                key: 'register',
                label: (<Link style={{ color: "black", display: "block" }} to="/register">Register</Link>)
            }
        ],
    }
];

const Header = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    const [current, setCurrent] = useState('');
    const onClick = e => {
        setCurrent(e.key);
    };


    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items} />
    );
}

export default Header;
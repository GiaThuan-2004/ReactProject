import { Link, NavLink } from "react-router-dom";
import { Menu } from 'antd';
import { useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';

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
                type: 'group',
                label: (<Link style={{ color: "black" }} to="/login">Login</Link>)
            },
            {
                type: 'group',
                label: (<Link style={{ color: "black" }} to="/register">Register</Link>)
            }
        ],
    }
];

const Header = () => {

    const [current, setCurrent] = useState('');
    const onClick = e => {
        console.log('click ', e);
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
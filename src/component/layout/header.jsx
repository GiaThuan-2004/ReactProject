import { Link, NavLink } from "react-router-dom";
import { Menu } from 'antd';
import { useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';

const items = [
    {
        key: 'home',
        label: (
            <Link className="list-item" to="/">Home</Link>
        ),
        icon: <HomeOutlined />
    },
    {
        key: 'books',
        label: (
            <Link className="list-item" to="/books">Books</Link>
        ),
        icon: <BookOutlined />
    },
    {
        key: 'users',
        label: (
            <Link className="list-item" to="/users">Users</Link>
        ),
        icon: <UserOutlined />
    },
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
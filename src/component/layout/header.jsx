import { Link, NavLink } from "react-router-dom";
import { Menu } from 'antd';
import { useContext, useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined, LoginOutlined, AliwangwangOutlined, LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from "../context/auth.context";
import { icons } from "antd/es/image/PreviewGroup";

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
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

        ...(!user.id ? [{
            key: 'login',
            label: (
                <Link to="/login">Login</Link>
            ),
            icon: <LoginOutlined />
        }] : []),

        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Log out',
                    key: 'logout',
                    icon: <LogoutOutlined />
                }
            ],
        }] : [])
    ];


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
import { Link, NavLink } from "react-router-dom";
import { Menu, message } from 'antd';
import { useContext, useState } from "react";
import { HomeOutlined, UserOutlined, BookOutlined, LoginOutlined, AliwangwangOutlined, LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from "../context/auth.context";
import { logoutApi } from "../../service/api.service";

const Header = () => {
    const { user, setUser } = useContext(AuthContext)

    const logOut = async () => {
        const response = await logoutApi()

        if (response.data) {
            console.log(response.data)

            localStorage.removeItem('access_token')
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })

            message.success('Logout Success')

        }
    }

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
                    label: (<span onClick={() => logOut()}>Log out</span>),
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
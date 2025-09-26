import UserForm from "../component/user/user.form";
import TableUser from "../component/user/user.table";
import "../component/user/user.css";
import { useEffect, useState } from 'react';
import { getAllUserApi } from '../service/api.service';


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        getDataUsers();
    }, [])

    const getDataUsers = async () => {
        const response = await getAllUserApi(); //Lay api
        setDataUsers(response.data) //Thay doi hook
    }

    return (
        <>
            <UserForm getDataUsers={getDataUsers} />
            <TableUser
                dataUsers={dataUsers}
                getDataUsers={getDataUsers} />
        </>
    )
}

export default UserPage;
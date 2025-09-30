import UserForm from "../component/user/user.form";
import TableUser from "../component/user/user.table";
import "../component/user/user.css";
import { useEffect, useState } from 'react';
import { getAllUserApi } from '../service/api.service';


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [total, setTotal] = useState(0)

    // [currentPage, pageSize]
    useEffect(() => {
        getDataUsers(currentPage, pageSize);
    }, [currentPage, pageSize])

    const getDataUsers = async (current, size) => {
        const response = await getAllUserApi(current, size); //Lay api
        if (response.data) {
            setCurrentPage(response.data.meta.current)
            setPageSize(response.data.meta.pageSize)
            setTotal(response.data.meta.total)
            setDataUsers(response.data.result)
        }

        //Thay doi hook
    }

    return (
        <>
            <UserForm
                getDataUsers={getDataUsers}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <TableUser
                dataUsers={dataUsers}
                getDataUsers={getDataUsers}
                currentPage={currentPage}
                pageSize={pageSize}
                total={total}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
            />
        </>
    )
}

export default UserPage;
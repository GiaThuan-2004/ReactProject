import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getAllUserApi } from '../../service/api.service';

const TableUser = () => {

    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        getDataUsers();
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const getDataUsers = async () => {
        const response = await getAllUserApi(); //Lay api
        console.log(response.data)
        setDataUsers(response.data) //Thay doi hook
    }

    return (
        <div className="table-container">
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={'_id'}
            />
        </div>
    );
}

export default TableUser;
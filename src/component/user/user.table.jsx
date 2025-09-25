import { Table } from 'antd';

const TableUser = ({ dataUsers }) => {

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
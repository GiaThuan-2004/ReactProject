import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateModal from './user.update.modal';
import { useState } from "react";
import DetailModal from './detail.modal';
import DeleteUser from './user.delete';

const TableUser = ({ dataUsers, getDataUsers, deleteUser }) => {

    const [dataUpdate, setDataUpdate] = useState(null)
    const [dataDetail, setDataDetail] = useState(null)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            // render giao dien bang react
            render: (_, record) => {
                return (
                    <a href="#!" onClick={() => {
                        setIsDetailModalOpen(true)
                        setDataDetail(record)
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <Space size="middle">
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record)
                                setIsUpdateModalOpen(true)
                            }}
                            style={{ color: 'orange', cursor: 'pointer' }}
                        />
                        <DeleteUser
                            getDataUsers={getDataUsers}
                            id={record._id}
                        />
                    </Space>
                );
            }
        },
    ];


    return (
        <div className="table-container">
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={'_id'}
            />
            <UpdateModal
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                getDataUsers={getDataUsers}
            />
            <DetailModal
                isDetailModalOpen={isDetailModalOpen}
                setIsDetailModalOpen={setIsDetailModalOpen}
                dataDetail={dataDetail}
            />
        </div>
    );
}

export default TableUser;
import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateModal from './user.update.modal';
import { useEffect, useState } from "react";
import DetailModal from './detail.modal';
import DeleteUser from './user.delete';

const TableUser = ({
    dataUsers, getDataUsers,
    currentPage, pageSize,
    total, setCurrentPage,
    setPageSize
}) => {
    const [dataUpdate, setDataUpdate] = useState(null)
    const [dataDetail, setDataDetail] = useState(null)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    // useEffect(() => {
    //     // console.log(dataUsers.length)
    // }, [dataUsers])

    const columns = [
        {
            title: 'No.',
            render: (_, record, index) => {
                return (
                    <>
                        {(index + 1) + (currentPage - 1) * pageSize}
                    </>
                );
            }
        },
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
                            dataUsers={dataUsers}
                            getDataUsers={getDataUsers}
                            id={record._id}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            setCurrentPage={setCurrentPage}
                        />
                    </Space>
                );
            }
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +currentPage) {
                setCurrentPage(+pagination.current)
            }
        }

        if (pagination && pagination.pageSize) {
            if (+pagination.current !== +pageSize) {
                setPageSize(+pagination.pageSize)
            }
        }
    };
    return (
        <div className="table-container">
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={'_id'}
                pagination={
                    {
                        current: currentPage,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />
            <UpdateModal
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                getDataUsers={getDataUsers}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            <DetailModal
                isDetailModalOpen={isDetailModalOpen}
                setIsDetailModalOpen={setIsDetailModalOpen}
                dataDetail={dataDetail}
                getDataUsers={getDataUsers}
                currentPage={currentPage}
                pageSize={pageSize}
            />
        </div>
    );
}

export default TableUser;
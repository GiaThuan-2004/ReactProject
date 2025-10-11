/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import CreateBookModal from "./book.create";
import { useState } from "react";
import { BookDetailModal } from "./book.detail";
import UpdateBookModal from "./update.book";


const TableBook = (
    { currentPage, pageSize, setCurrentPage,
        setPageSize, data, total, getBook }) => {

    const [isDrawerDetailOpen, setIsDrawerDetailOpen] = useState(false)
    const [detailData, setDetailData] = useState(null)

    const [isUpdateBookModalOpen, setIsUpdateBookModalOpen] = useState(false)
    const [updateData, setUpdateData] = useState(null)

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
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href="#!"
                            onClick={() => {
                                setIsDrawerDetailOpen(true)
                                setDetailData(record)
                            }}
                            style={{ cursor: 'pointer' }}
                        >{record._id}</a>
                    </>
                )
            }
        },
        {
            title: 'Title',
            dataIndex: 'mainText',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Author',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            render: (_, record) => {
                return (
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <EditOutlined
                            style={{ color: '#ff9c38', fontSize: '20px', cursor: 'pointer' }}
                            onClick={() => {
                                setIsUpdateBookModalOpen(true)
                                setUpdateData(record)
                            }}
                        />
                        <DeleteOutlined style={{ color: '#fa2525', fontSize: '20px' }} />
                    </div>
                );
            }
        }
    ];

    const onChangeTable = (pagination) => {
        if (+currentPage !== pagination.current) {
            setCurrentPage(pagination.current)
        }

        if (+pageSize !== pagination.pageSize) {
            setPageSize(pagination.pageSize)
        }
    }
    return (
        <>
            {/*  */}

            <Table
                columns={columns}
                dataSource={data}
                rowKey={'_id'}
                pagination={
                    {
                        current: currentPage,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }
                }
                onChange={onChangeTable}
            />
            <BookDetailModal
                isDrawerDetailOpen={isDrawerDetailOpen}
                setIsDrawerDetailOpen={setIsDrawerDetailOpen}
                detailData={detailData}
                currentPage={currentPage}
                pageSize={pageSize}
                getBook={getBook}
            />
            <UpdateBookModal
                isUpdateBookModalOpen={isUpdateBookModalOpen}
                setIsUpdateBookModalOpen={setIsUpdateBookModalOpen}
                updateData={updateData}
                currentPage={currentPage}
                pageSize={pageSize}
                getBook={getBook}
            />

        </>
    );
}

export default TableBook
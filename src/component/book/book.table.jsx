/* eslint-disable react-hooks/exhaustive-deps */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";


const TableBook = ({ currentPage, pageSize, setCurrentPage, setPageSize, data, total }) => {

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
                    <a href="#!">{record._id}</a>
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
                        <EditOutlined style={{ color: '#ff9c38', fontSize: '20px' }} />
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


        </>
    );
}

export { TableBook }
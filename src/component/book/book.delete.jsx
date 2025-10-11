import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { notification, Popconfirm } from 'antd';
import { deleteBookApi } from '../../service/api.service';


const DeleteBook = ({ currentPage, pageSize, getBook, data, id }) => {

    const deleteBook = async () => {
        const response = await deleteBookApi(id)

        if (response.data) {
            notification.success({
                message: 'Delete Book',
                description: 'Delete Book Success'
            })
            if (data && Array.isArray(data) && data.length === 1 && currentPage !== 1) {
                getBook(currentPage - 1, pageSize)
            } else {
                getBook(currentPage, pageSize)
            }
        } else {
            notification.error({
                message: 'Delete Book',
                description: JSON.stringify(response.message)
            })
        }
    }

    return (
        <Popconfirm
            title="Delete the book"
            description="Are you sure to delete this book?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={deleteBook}
        >
            <DeleteOutlined style={{ color: '#fa2525', fontSize: '20px' }} />
        </Popconfirm>

    );
}

export default DeleteBook
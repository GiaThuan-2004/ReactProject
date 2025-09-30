
import { notification, message, Popconfirm, } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteUserApi } from '../../service/api.service';


const DeleteUser = ({ dataUsers, getDataUsers, id, currentPage, pageSize, setCurrentPage }) => {

    return (
        <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={async () => {
                const response = await deleteUserApi(id)
                if (response.data) {
                    notification.success({
                        message: 'Delete Success',
                        description: 'User was deleted'
                    })
                    if (dataUsers.length === 1 && +currentPage > 1) {
                        getDataUsers(currentPage - 1, pageSize)
                    } else {
                        getDataUsers(currentPage, pageSize)
                    }
                } else {
                    notification.error({
                        message: 'Delete Failed',
                        description: JSON.stringify(response.message)
                    })
                }
            }}
            okText="Yes"
            cancelText="No"
        >
            <DeleteOutlined style={{ color: 'red' }} />
        </Popconfirm>
    );
}
export default DeleteUser;
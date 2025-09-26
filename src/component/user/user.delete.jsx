
import { notification, message, Popconfirm, } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteUserApi } from '../../service/api.service';


const DeleteUser = ({ getDataUsers, id }) => {

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
                    getDataUsers()
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
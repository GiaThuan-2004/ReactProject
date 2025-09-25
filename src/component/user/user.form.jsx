import { Input, Button, notification, Modal } from 'antd';
import { useEffect, useState } from "react";
import { createUserApi } from '../../service/api.service';


const UserForm = ({ getDataUsers }) => {
    // console.log(getDataUsers)
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const [phoneState, setPhoneState] = useState("");

    const getInput = async () => {

        const response = await createUserApi(nameState, emailState, passState, phoneState)
        // Tao thong bao khi tao user thanh cong
        if (response.data) {
            notification.success({
                message: 'Create user',
                description: 'Tạo mới user thành công'
            })
            //xoa cac gia tri trong o input va dong modal khi tao user thanh cong
            setNameState("")
            setEmailState("")
            setPassState("")
            setPhoneState("")
            setIsModalOpen(false);

            //render lai table user sao khi tao moi thanh cong (khong can refresh la trang)
            getDataUsers();

        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(response.message)
            })
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className='action-block'>
                <h3>Table Users</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>
                    Create User
                </Button>
            </div>
            <Modal
                title="Create New User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => getInput()}
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
            >
                <div className='form-container'>
                    <div className='form-item'>
                        <span>FullName</span>
                        <Input
                            value={nameState}
                            onChange={event => setNameState(event.target.value)}>
                        </Input>
                    </div>
                    <div className='form-item'>
                        <span>Email</span>
                        <Input
                            value={emailState}
                            onChange={event => setEmailState(event.target.value)}>
                        </Input>
                    </div>
                    <div className='form-item'>
                        <span>Password</span>
                        <Input.Password
                            value={passState}
                            onChange={event => setPassState(event.target.value)}>
                        </Input.Password>
                    </div>
                    <div className='form-item'>
                        <span>Phone</span>
                        <Input
                            value={phoneState}
                            onChange={event => setPhoneState(event.target.value)}>
                        </Input>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default UserForm;
import { Input, Button, notification } from 'antd';
import { useState } from "react";
import { createUserApi } from '../../service/api.service';


const UserForm = () => {
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const [phoneState, setPhoneState] = useState("");

    const getInput = async () => {
        const response = await createUserApi(nameState, emailState, passState, phoneState)
        console.log(response)
        // Tao thong bao khi tao user thanh cong
        if (response.data) {
            notification.success({
                message: 'create user',
                description: 'Tạo mới user thành công'
            })
        }
    }


    return (
        <div className="form-container">
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
            <div>
                <Button type='primary' onClick={() => getInput()}>Create User</Button>
            </div>
        </div>
    );
}

export default UserForm;
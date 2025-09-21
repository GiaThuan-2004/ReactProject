import { Input, Button } from 'antd';
import { useState } from "react";
import axios from 'axios';

const UserForm = () => {
    const [nameState, setNameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const [phoneState, setPhoneState] = useState("");

    const getInput = () => {
        const URL_BACKEND = 'http://localhost:8080/api/v1/user'

        const data = {
            fullName: nameState,
            email: emailState,
            password: passState,
            phone: phoneState
        }
        axios.post(URL_BACKEND, data)

        console.log({ nameState, emailState, passState, phoneState });
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
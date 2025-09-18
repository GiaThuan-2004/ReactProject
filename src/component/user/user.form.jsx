import { Input, Button } from 'antd';

const UserForm = () => {
    return (
        <div className="form-container">
            <div className='form-item'>
                <span>FullName</span>
                <Input></Input>
            </div>
            <div className='form-item'>
                <span>Email</span>
                <Input></Input>
            </div>
            <div className='form-item'>
                <span>Password</span>
                <Input.Password></Input.Password>
            </div>
            <div className='form-item'>
                <span>Phone</span>
                <Input></Input>
            </div>
            <div>
                <Button type='primary'>Create User</Button>
            </div>
        </div>
    );
}

export default UserForm;
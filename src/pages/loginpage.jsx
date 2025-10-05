import { Input, Button, Form, notification } from 'antd'
import './loginPage.css'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'

const LoginPage = () => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        console.log(values.email, values.password)
    }
    return (
        <Form
            className='login-form'
            layout='vertical'
            initialValues={{ remember: true }}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item
                label="Email"
                name="email"
                validateTrigger="onBlur"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    },
                    {
                        pattern: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address!",
                    }
                ]}
            >
                <Input
                    onInput={() => {
                        // clear error khi đang gõ
                        form.setFields([{ name: "email", errors: [] }]);
                    }}>
                </Input>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                validateTrigger="onBlur"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    },
                    {
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Password must have at least one alphabet, one number and 8 character",
                    }
                ]}
            >
                <Input.Password
                    onInput={() => {
                        // clear error khi đang gõ
                        form.setFields([{ name: "password", errors: [] }]);
                    }}>
                </Input.Password>
            </Form.Item>

            <div className="action-block">
                <Button
                    onClick={() => { form.submit() }}
                    type='primary'
                    style={{ maxWidth: "100px" }}>Login
                </Button>
                <Link className='toHome' to="/"><p>Go to home</p><ArrowRightOutlined /></Link>
            </div>
            <div className="line"></div>

            <p className='register-guide'>Have not account yet?<Link style={{ marginLeft: 3 }} to="/register">Register now</Link></p>

        </Form>
    )
}

export default LoginPage;
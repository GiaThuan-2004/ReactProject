import { Input, Button, Form, notification, Row, Col, Divider } from 'antd'
import { registerUserApi } from '../service/api.service'
import { useNavigate } from "react-router"
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const response = await registerUserApi(
            values.fullName,
            values.email,
            values.password,
            values.phone)

        if (response.data) {
            notification.success({
                message: 'Register User',
                description: 'Register Success'
            })
            navigate('/login')
        } else {
            notification.error({
                message: 'Register User',
                description: JSON.stringify(response.message)
            })
        }
    }
    return (
        <Row justify={'center'} style={{ marginTop: "20px" }}>
            <Col xs={24} md={16} lg={8}>
                <h3 style={{ textAlign: 'center' }}>Register Form</h3>
                <Form
                    layout='vertical'
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <div style={{ padding: '20px', width: '100%' }}>
                        <Form.Item
                            label="FullName"
                            name="fullName"
                            validateTrigger="onBlur"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your full name!'
                                },
                                {
                                    pattern: /^[a-zA-Z]+$/,
                                    message: 'Name just include alphabet'
                                }
                            ]}
                        >
                            <Input
                                onInput={() => {
                                    // clear error khi đang gõ
                                    form.setFields([{ name: "fullName", errors: [] }]);
                                }}>
                            </Input>
                        </Form.Item>
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
                            style={{ width: '100%' }}
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
                        <Form.Item
                            label="Phone"
                            name="phone"
                            validateTrigger="onBlur"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!'
                                },
                                {
                                    pattern: /^[0-9]{10}$/,
                                    message: "Password must have only number and at least 9 number",
                                }
                            ]}
                        >
                            <Input
                                onInput={() => {
                                    // clear error khi đang gõ
                                    form.setFields([{ name: "phone", errors: [] }]);
                                }}>
                            </Input>
                        </Form.Item>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button
                                onClick={() => { form.submit() }}
                                type='primary'
                                style={{ width: "100px" }}>Register
                            </Button>
                            <Button
                                onClick={() => {
                                    const name = form.getFieldValue("fullName")
                                    if (name && /^[a-zA-Z]+$/.test(name)) {
                                        form.setFieldValue('email', `${name}@gmail.com`)
                                    }
                                }}
                                type='primary'
                                style={{ width: "200px", marginLeft: '10px' }}>Auto generate email
                            </Button>
                        </div>
                        <Divider ></Divider>
                        <p style={{ textAlign: 'center' }}>
                            Have Account?
                            <Link style={{ marginLeft: '5px' }} to="/login">Login now</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Row>


    )
}

export default RegisterPage;
import { Button, Col, Form, Input, InputNumber, Modal, notification, Row, Select, Space } from "antd";
import { useState } from "react";
import { createBookApi } from "../../service/api.service";

const CreateBookModal = ({ getBook, currentPage, pageSize }) => {
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false)
    const [form] = Form.useForm()

    const createBook = async (title, price, quantity, author, category) => {
        const response = await createBookApi(title, +price, +quantity, author, category)

        if (response.data) {
            notification.success({
                message: "Create new book",
                description: "Success"
            })

            await getBook(currentPage, pageSize)
        } else {
            notification.error({
                message: "Create new book",
                description: JSON.stringify(response.message)
            })
        }
    }

    const closeModal = () => {
        form.resetFields()
        setIsModalCreateOpen(false)
    }

    const onFinish = (values) => {
        // console.log(values)
        createBook(
            values.title, values.price,
            values.quantity, values.author,
            values.category)
        closeModal()
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                <h3 style={{ fontSize: '40px' }}>Table Book</h3>
                <Button
                    type="primary" size="large"
                    onClick={() => setIsModalCreateOpen(true)}
                >Create new book</Button>
            </div>
            <Modal
                title="Create Book"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalCreateOpen}
                onOk={() => form.submit()}
                onCancel={() => closeModal()}
                okText={"Create new book"}
                maskClosable={false}
            >
                <Form
                    layout="vertical" form={form}
                    onFinish={onFinish}
                >
                    <Form.Item label="Title" name="title" validateTrigger="onChange"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter title'
                            }
                        ]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Author" name="author" validateTrigger="onChange"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter author'
                            }
                        ]}>
                        <Input />
                    </Form.Item>

                    <Row gutter={14}>
                        <Col span={8}>
                            <Form.Item label="Price" name="price" validateTrigger="onChange" style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter price'
                                    }
                                ]}>
                                <InputNumber
                                    style={{ width: '100%' }}
                                    min={0}
                                    formatter={(value) => value ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VND' : '0 VND'}
                                    parser={(value) => value.replace(/[^\d]/g, '')}
                                // onInput={() => form.setFields([{ name: "price", errors: [] }])}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Quantity" name="quantity" validateTrigger="onChange" style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter quantity'
                                    }
                                ]}>

                                <InputNumber
                                    min={0}
                                    style={{ width: '100%' }}
                                // onInput={() => form.setFields([{ name: "quantity", errors: [] }])}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Category" name="category" validateTrigger="onChange" style={{ flex: 1 }}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select category'
                                    }
                                ]}
                            >
                                <Select
                                    style={{ width: '100%' }}
                                    onClick={() => form.setFields([{ name: "category", errors: [] }])}
                                    placeholder="Select a category"
                                    options={[
                                        { value: 'Arts', label: 'Arts' },
                                        { value: 'Business', label: 'Business' },
                                        { value: 'Comics', label: 'Comics' },
                                        { value: 'Cooking', label: 'Cooking' },
                                        { value: 'Entertainment', label: 'Entertainment' },
                                        { value: 'History', label: 'History' },
                                        { value: 'Music', label: 'Music' },
                                        { value: 'Sports', label: 'Sports' },
                                        { value: 'Teen', label: 'Teen' },
                                        { value: 'Travel', label: 'Travel' },
                                    ]}

                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>

    );
}

export default CreateBookModal
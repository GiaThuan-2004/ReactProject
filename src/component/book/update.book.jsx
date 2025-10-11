/* eslint-disable react-hooks/exhaustive-deps */
import { Modal, Form, Select, Col, InputNumber, Row, Input, notification } from "antd"
import { useEffect } from "react"
import { updateBookApi } from "../../service/api.service"

const UpdateBookModal = (
    {
        isUpdateBookModalOpen, setIsUpdateBookModalOpen, updateData,
        currentPage, pageSize, getBook
    }) => {

    const [form] = Form.useForm()

    useEffect(() => {
        if (isUpdateBookModalOpen && updateData) {
            form.setFieldsValue(
                {
                    _id: updateData._id,
                    title: updateData.mainText,
                    author: updateData.author,
                    price: updateData.price,
                    quantity: updateData.quantity,
                    category: updateData.category
                })
        }
    }, [updateData, form])


    const updateBook = async (_id, title, author, price, quantity, category) => {
        const response = await updateBookApi(
            _id, updateData.thumbnail, title,
            author, +price, +quantity, category
        )

        if (response.data) {
            await getBook(currentPage, pageSize)
            notification.success({
                message: 'Update Book',
                description: 'Update Book Success'
            })
        } else {
            notification.error({
                message: 'Update Book',
                description: JSON.stringify(response.message)
            })
        }
    }

    const onFinish = values => {
        closeModal()
        updateBook(
            values._id, values.title, values.author,
            values.price, values.quantity, values.category
        )
    }

    const closeModal = () => {
        setIsUpdateBookModalOpen(false)
    }
    console.log(updateData)
    return (
        <>
            {
                updateData &&
                <Modal
                    title="Update Book"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isUpdateBookModalOpen}
                    onOk={() => form.submit()}
                    onCancel={() => closeModal()}
                    okText={"Update Book"}
                    maskClosable={false}
                >
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onFinish}
                    >
                        <Form.Item label="Id" name="_id">
                            <Input disabled />
                        </Form.Item>
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
            }
        </>
    );
}

export default UpdateBookModal
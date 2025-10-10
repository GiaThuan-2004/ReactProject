import { EyeOutlined, UploadOutlined } from "@ant-design/icons";
import { Drawer, Flex, Image, Upload, Button, notification } from "antd";
import { useEffect, useState } from "react";
import { updateBookApi, upLoadFileApi } from "../../service/api.service";

const BookDetailModal = (
    { isDrawerDetailOpen, setIsDrawerDetailOpen,
        detailData, currentPage, pageSize, getBook }) => {

    const [fileUpload, setFileUpload] = useState(null)
    const [previewImg, setPreviewImg] = useState(null)

    useEffect(() => {
        if (fileUpload) {
            const objectUrl = URL.createObjectURL(fileUpload)
            setPreviewImg(objectUrl)
        }
    }, [fileUpload])

    const saveFileToSever = async () => {
        const response = await upLoadFileApi(fileUpload, 'book')

        if (response.data) {
            const responseUpdate = await updateBookApi(
                detailData._id, response.data.fileUploaded, detailData.mainText, detailData.author,
                +detailData.price, +detailData.quantity, detailData.category
            )
            if (responseUpdate.data) {
                setFileUpload(null)
                setPreviewImg(null)
                setIsDrawerDetailOpen(false)
                getBook(currentPage, pageSize)

                notification.success({
                    message: 'Upload file',
                    description: 'Upload file success'
                })
            } else {
                notification.error({
                    message: 'Upload file',
                    description: JSON.stringify(responseUpdate.message)
                })
            }
        } else {
            notification.error({
                message: 'Upload file',
                description: JSON.stringify(response.message)
            })
        }
    }

    const onChange = event => {
        if (!event.fileList || event.fileList.length === 0) {
            setFileUpload(null)
            setPreviewImg(null)
            return
        }
        setFileUpload(event.fileList[0].originFileObj)
    }

    return (
        <>
            {
                detailData ?
                    <Drawer
                        title={`Detail of ${detailData.mainText}`}
                        size="large"
                        onClose={() => setIsDrawerDetailOpen(false)}
                        open={isDrawerDetailOpen}
                        closable={{ 'aria-label': 'Close Button' }}
                        maskClosable={false}
                    >
                        <Flex vertical gap={15}>
                            <p>Id: {detailData._id}</p>
                            <p>Title: {detailData.mainText}</p>
                            <p>Price: {detailData.price}</p>
                            <p>Quantity: {detailData.quantity}</p>
                            <p>Author: {detailData.author}</p>
                            <p>Category: {detailData.category}</p>

                            <Image
                                style={{ objectFit: 'cover', border: '1px solid #ccc' }}
                                height={200}
                                width={200}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${detailData.thumbnail}`}
                            />
                            <Upload
                                maxCount={1}
                                beforeUpload={() => false}
                                onChange={onChange}
                                showUploadList={false}
                            // onPreview={file => console.log(file)}
                            // onRemove={(file) => console.log(file)}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            {
                                previewImg &&

                                <>
                                    <Image
                                        height={200}
                                        width={200}
                                        src={previewImg}
                                        style={{ objectFit: 'cover', border: '1px solid #ccc' }}
                                    />
                                    <Button
                                        type="primary"
                                        onClick={() => saveFileToSever()}
                                        style={{ width: '30%' }}
                                    >Save file</Button>
                                </>
                            }
                        </Flex>
                    </Drawer> : <></>
            }
        </>


    );
}

export { BookDetailModal }
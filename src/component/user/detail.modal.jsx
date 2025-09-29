import { Drawer, Button, notification } from 'antd';
import { useEffect, useState } from 'react';
import { updateUserApi, upLoadFileApi } from '../../service/api.service';

const DetailModal = ({ isDetailModalOpen, setIsDetailModalOpen, dataDetail, getDataUsers }) => {

    const [fileState, setFileState] = useState(null)
    const [previewState, setPreviewState] = useState(null)

    useEffect(() => {
        if (fileState) {
            const objectUrl = URL.createObjectURL(fileState)
            setPreviewState(objectUrl)
        }
    }, [fileState])

    const getFileFromUser = event => {
        if (!event.target.files || event.target.files.length === 0) {
            setFileState(null)
            setPreviewState(null)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setFileState(event.target.files[0])

    }

    const saveFileToSever = async () => {
        const response = await upLoadFileApi(fileState, 'avatar')
        if (response.data) {
            const responseUpdate = await updateUserApi(dataDetail._id,
                dataDetail.email,
                dataDetail.phone,
                response.data.fileUploaded)

            if (responseUpdate.data) {
                setIsDetailModalOpen(false)
                setFileState(null)
                setPreviewState(null)
                getDataUsers()

                notification.success({
                    message: 'Upload Success',
                    description: `Loaded picture ${response.data.fileUploaded} success`
                })
            } else {
                notification.error({
                    message: 'Upload Failed',
                    description: JSON.stringify(responseUpdate.message)
                })
            }
        } else {
            notification.error({
                message: 'Upload Failed',
                description: JSON.stringify(response.message)
            })
        }
    }

    return (
        <>
            <Drawer
                width={'60vw'}
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => {
                    setIsDetailModalOpen(false)

                }}
                open={isDetailModalOpen}
            >
                {dataDetail ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p>ID: {dataDetail._id}</p>
                        <p>FullName: {dataDetail.fullName}</p>
                        <p>Email: {dataDetail.email}</p>
                        <p>Phone: {dataDetail.phone}</p>
                        <div className='img-container'>
                            <img className='avatar' src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="" />
                            <label htmlFor="btnUpload">Upload Avatar</label>
                            <input type="file" id="btnUpload" hidden onChange={getFileFromUser} />
                        </div>
                        {
                            previewState &&
                            <div className='img-container'>
                                <img className='avatar' src={previewState} alt="" />
                                <Button type='primary' onClick={() => saveFileToSever()}>Save</Button>
                            </div>
                        }
                    </div>
                    :
                    <p>Have no any information</p>
                }

            </Drawer>
        </>
    );
}

export default DetailModal;
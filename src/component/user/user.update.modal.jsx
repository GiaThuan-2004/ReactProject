import { Input, Modal, notification } from 'antd';
import { useEffect, useState } from "react";
import '../../service/api.service'
import { updateUserApi } from '../../service/api.service';


const UpdateModal = ({ dataUpdate, setDataUpdate, isUpdateModalOpen, setIsUpdateModalOpen, getDataUsers, currentPage, pageSize }) => {
    const [nameState, setNameState] = useState("");
    const [phoneState, setPhoneState] = useState("");
    const [idState, setIdState] = useState("")

    // effect with dependence
    useEffect(() => {
        // dataUpdate can be null so need this condition
        if (dataUpdate) {
            setNameState(dataUpdate.fullName)
            setPhoneState(dataUpdate.phone)
            setIdState(dataUpdate._id)
        }
    }, [dataUpdate])

    const getUpdate = async () => {

        const response = await updateUserApi(idState, nameState, phoneState)
        console.log({ currentPage, pageSize })
        // Tao thong bao khi tao user thanh cong
        if (response.data) {
            notification.success({
                message: 'Update User',
                description: 'Cập nhật user thành công'
            })
            console.log(response, response.data)
            //xoa cac gia tri trong o input va dong modal khi tao user thanh cong
            closeBtn();

            //render lai table user sao khi tao moi thanh cong (khong can refresh la trang)
            getDataUsers(currentPage, pageSize);

        } else {
            notification.error({
                message: 'Error create user',
                description: JSON.stringify(response.message)
            })
        }
    }

    const closeBtn = () => {
        // setNameState("")
        // setPhoneState("")
        // setIdState("")
        setIsUpdateModalOpen(false)
        setDataUpdate(null)
    }

    return (

        <>
            <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isUpdateModalOpen}
                onOk={() => getUpdate()}
                onCancel={() => { closeBtn() }}
                maskClosable={false}
                okText={'Save'}
            >
                <div className='form-container'>
                    <div className='form-item'>
                        <span>ID</span>
                        <Input
                            value={idState}
                            disabled>
                        </Input>
                    </div>
                    <div className='form-item'>
                        <span>FullName</span>
                        <Input
                            value={nameState}
                            onChange={event => setNameState(event.target.value)}>
                        </Input>
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
    )
}

export default UpdateModal;
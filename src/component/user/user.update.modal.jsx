import { Input, Modal } from 'antd';
import { useEffect, useState } from "react";


const UpdateModal = ({ dataUpdate, setDataUpdate, isUpdateModalOpen, setIsUpdateModalOpen }) => {
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

    const getUpdate = () => {

        console.log('Update component')

        // const response = await createUserApi(nameState, emailState, passState, phoneState)
        // // Tao thong bao khi tao user thanh cong
        // if (response.data) {
        //     notification.success({
        //         message: 'Create user',
        //         description: 'Tạo mới user thành công'
        //     })
        //     //xoa cac gia tri trong o input va dong modal khi tao user thanh cong
        //     setNameState("")
        //     setEmailState("")
        //     setPassState("")
        //     setPhoneState("")
        //     setIsUpdateModalOpen(false);

        //     //render lai table user sao khi tao moi thanh cong (khong can refresh la trang)
        //     getDataUsers();

        // } else {
        //     notification.error({
        //         message: 'Error create user',
        //         description: JSON.stringify(response.message)
        //     })
        // }
    }

    const closeBtn = () => {
        // setNameState("")
        // setPhoneState("")
        // setIdState("")
        setDataUpdate(null)
    }

    return (

        <>
            <Modal
                title="Update User"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isUpdateModalOpen}
                onOk={() => getUpdate()}
                onCancel={() => {
                    setIsUpdateModalOpen(false)
                    closeBtn()
                }}
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
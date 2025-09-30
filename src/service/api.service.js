import axios from "./axios.customize"

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user'

    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

const updateUserApi = (_id, fullName, phone, avatar = undefined) => {
    const URL_BACKEND = '/api/v1/user'

    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone,
        ...(avatar && { avatar })
    }
    return axios.put(URL_BACKEND, data)
}

const getAllUserApi = (currentPage, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${currentPage}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const deleteUserApi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`
    return axios.delete(URL_BACKEND)
}

const upLoadFileApi = (file, folder) => {
    const BACKEND_URL = '/api/v1/file/upload'

    const config = {
        headers: {
            'upload-type': folder,
            "Content-Type": "multipart/form-data",
        }
    }

    const formData = new FormData()
    formData.append('fileImg', file)

    return axios.post(BACKEND_URL, formData, config)
}

export { createUserApi, updateUserApi, getAllUserApi, deleteUserApi, upLoadFileApi }
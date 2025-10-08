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

const registerUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = '/api/v1/user/register'

    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

const loginApi = (email, password) => {
    const BACKEND_URL = '/api/v1/auth/login'

    const data = {
        username: email,
        password: password,
        delay: 2000
    }

    return axios.post(BACKEND_URL, data)
}

const getAccountApi = () => {
    const BACKEND_URL = '/api/v1/auth/account'
    return axios.get(BACKEND_URL)
}

export {
    createUserApi, updateUserApi, getAllUserApi,
    deleteUserApi, upLoadFileApi, registerUserApi,
    loginApi, getAccountApi
}
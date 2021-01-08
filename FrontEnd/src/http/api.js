import axios from 'axios'
import http from '../config/http';

const endPoint = http.apiEndPoint;

// category
export const getCategories = async () => {
    return await axios.get(`${endPoint}/category`)
}

export const postCategory = async (body) => {
    return await axios.post(`${endPoint}/category`, body)
}

export const deleteCategory = async (id) => {
    return await axios.delete(`${endPoint}/category/${id}`)
}

// User

export const postUser = async (body) => {
    return await axios.post(`${endPoint}/users`, body)
}

export const login = async (body) => {
    return await axios.post(`${endPoint}/auth`, body);
}
// export const postCategory = async () => {

// }
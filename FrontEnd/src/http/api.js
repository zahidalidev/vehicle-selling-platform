import axios from 'axios'
import http from '../config/http';

const endPoint = http.apiEndPoint + '/api';

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

export const getCurrentUser = async (token) => {
    return await axios.get(`${endPoint}/users/me`, {
        headers: { 'x-auth-token': token }
    })
}

export const updateUser = async (body, token) => {
    return await axios.put(`${endPoint}/users/me/${body._id}`, body, {
        headers: { 'x-auth-token': token }
    })
}

export const updateUserProfile = async (id, data) => {
    return await axios.put(`${endPoint}/users/me/profileImage/${id}`, data)
}

export const getAdOwner = async (id) => {
    return await axios.get(`${endPoint}/users/adOwner/${id}`)
}

// Ad
export const postAd = async (body, token) => {
    return await axios.post(`${endPoint}/userPosts`, body, {
        headers: { 'x-auth-token': token }
    });
}

export const postAdImages = async (id, data) => {
    return await axios.put(`${endPoint}/userPosts/images/${id}`, data)
}

export const updateAd = async (body, token) => {
    return await axios.put(`${endPoint}/userPosts/${body._id}`, body, {
        headers: { 'x-auth-token': token }
    });
}

export const getAllAds = async () => {
    return await axios.get(`${endPoint}/userPosts`)
}

export const getAdsDetail = async (id) => {
    return await axios.get(`${endPoint}/userPosts/${id}`)
}

export const getCurrentUserAds = async (id) => {
    return await axios.get(`${endPoint}/userPosts/my/${id}`)
}

export const deleteUserAd = async (id) => {
    return await axios.delete(`${endPoint}/userPosts/${id}`)
}
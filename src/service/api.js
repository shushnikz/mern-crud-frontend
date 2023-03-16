import axios from "axios";

const URL = "https://mern-crud-backend-qkjh.onrender.com";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/adduser`, data);
    } catch (error) {
        console.log("Error while calling add User Api", error)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/allusers`)
    } catch (error) {
        console.log("Error while calling all User Api", error)
    }
}

export const editUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling edit User Api", error)
    }
}

export const updateUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user)
    } catch (error) {
        console.log("Error while calling update User Api", error)
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling deleteUser api", error)
    }
}
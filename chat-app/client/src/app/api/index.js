import axios from 'axios'

const URL = "http://localhost:8000"

export const Signin = async (data) => {
    // console.log("*************",data)
    try {
        return await axios.post(`${URL}/signin`, data)
    } catch (error) {
        console.log("Data cannot be post while signin", error)
    }
}

export const login = async (data) => {
    // console.log("*************",data)
    try {
        return await axios.post(`${URL}/login`, data,{
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
    } catch (error) {
        console.log("Data cannot be post while login", error)
    }
}

export const editProfile = async (data) => {
    // console.log("*************",data, id)
    try {
        return await axios.post(`${URL}/profile`, data, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        })
    } catch (error) {
        console.log("Data cannot be post while edit profile", error)
    }
}
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
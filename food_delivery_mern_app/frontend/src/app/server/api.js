import axios from 'axios'

const URL = 'http://localhost:8000';

// l3JnRCjgmO5jzUij

export const signIn = async (data) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/signin`, data)

    } catch (error) {
        console.log("backend error", error)
    }
}

export const userLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login`, data)
    }catch(error){
        console.log("Error while login", error)
    }
}
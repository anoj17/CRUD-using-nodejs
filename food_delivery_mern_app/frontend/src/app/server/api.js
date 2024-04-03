import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_URL;

// l3JnRCjgmO5jzUij

export const signIn = async (data) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/signin`, data,)
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

    } catch (error) {
        console.log("backend error", error)
    }
}

export const userLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error while login", error)
    }
}

export const addProduct = async (data) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/addProduct`, data)
    } catch (error) {
        console.log("Error while add products", error)
    }
}

export const getData = async () => {
    try{
       return await axios.get(`${URL}/products`)
    }catch(error){
        console.log("Error while fetch data", error)
    }
}
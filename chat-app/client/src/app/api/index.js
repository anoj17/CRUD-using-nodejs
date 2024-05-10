import axios from 'axios'

const URL = "http://localhost:8000"

export const Signin = async (data) =>{
    try{
       return await axios.post(`${URL}/signin`, data)
    }catch(error){
        console.log("Data cannot be post while signin", error)
    }
}
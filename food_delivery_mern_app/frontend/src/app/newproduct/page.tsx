'use client';

import { useState } from "react";
import { IoCloudUpload } from "react-icons/io5";
import { ImageToBase64 } from '../utility/ImageToBase64'
import Image from "next/image";
import { useMutation } from "react-query";
import { addProduct } from "../server/api";
import toast from "react-hot-toast";


const NewProduct = () => {

    const [data, setData] = useState({
        name: "",
        category: "fruits",
        image: "",
        price: "",
        description: ""
    })

    const { mutate } = useMutation(['product'], addProduct, {
        onSuccess: res => {
            console.log(res?.data)
            if (res?.data.alert) {
                toast(res?.data.message)
            }
        },
        onError: error => {
            console.log(error)
        }
    })

    const changeHandle = (e:any) => {
        const { name, value } = e.target

        setData((prev: any) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const uploadImage = async (e: any) => {
        const datas = await ImageToBase64(e?.target?.files[0])
        // console.log(datas)
        setData((prev: any) => {
            return {
                ...prev,
                image: datas
            }
        })
    }

    const submitData = (e: any) => {
        e.preventDefault()

        const { name, price, image, category } = data

        if (name && price && image && category) {
            mutate(data)
            setData({ name: "", price: "", image: "", category: "", description: "" })
        } else {
            toast("fill the required field!")
        }

    }
    return <>

        <div className="flex items-center justify-center py-4">
            <form onSubmit={submitData} className="flex flex-col w-full md:w-[500px] bg-white rounded-md shadow drop-shadow-md px-5 md:px-10 py-3">
                <label htmlFor="name">Name of products</label>
                <input type="text" name="name" value={data.name} onChange={changeHandle} className="py-1 rounded-md focus:outline-none px-2 bg-slate-300 my-1" />

                <label htmlFor="category">Category</label>
                <select name="category" value={data.category} onChange={changeHandle} className="py-1 rounded-md focus:outline-none px-2 bg-slate-300 my-1">
                    <option value={"value"}>Select Cagegory</option>
                    <option value={"fruits"}>Fruits</option>
                    <option value={"rice"}>Rice</option>
                    <option value={"burger"}>Burger</option>
                    <option value={"cake"}>Cake</option>
                    <option value={"vegetable"}>Vegetables</option>
                    <option value={"icecream"}>IceCream</option>
                    <option value={"dosa"}>Dosa</option>
                    <option value={"pizza"}>Pizza</option>
                </select>

                <label htmlFor="image">Image
                    <div className="h-40 flex items-center cursor-pointer justify-center bg-slate-200">

                        {
                            data.image ? <img src={data.image} alt="image" className="h-full" /> :
                                <IoCloudUpload size={50} className="" />
                        }

                    </div>
                    <input type="file" onChange={uploadImage} accept="image/*" name="image" id="image" className="hidden" />
                </label>

                <label htmlFor="price">Price of products</label>
                <input type="text" name="price" value={data.price} onChange={changeHandle} className="py-1 rounded-md focus:outline-none px-2 bg-slate-300 my-1" />

                <label htmlFor="description">Description</label>
                <textarea rows={2} name="description" value={data.description} onChange={changeHandle} className="py-1 rounded-md focus:outline-none px-2 bg-slate-300 my-1"></textarea>

                <button type="submit" className="bg-gray-600 hover:bg-gray-700 py-1 my-3 rounded-sm text-white">submit</button>
            </form>
        </div>

    </>
}

export default NewProduct
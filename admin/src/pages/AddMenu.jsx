import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddMenu = ({ token }) => {

  // State Variables
  const [image, setImage] = useState(false)
  const [name, setName] = useState("")
  


  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name)
      formData.append("image", image)

      const response = await axios.post(backendUrl + "/api/menu/add", formData, {headers: { Authorization: `Bearer ${token}`}})
      if(response.data.success){
        toast.success(response.data.message);
        setName("")
        setImage(false)
      }else{
        toast.error(response.data.message);
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)
    
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-5 px-6">
      <div className="w-full max-w-[800px]">
        <p className="mb-2 font-medium">Upload Image</p>
        <div className="flex gap-3 flex-wrap">
          <label htmlFor="image">
            <img className="w-20 border border-gray-300 rounded-md cursor-pointer" src={!image ? assets.upload_area : URL.createObjectURL(image)} />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
        </div>
      </div>

      <div className='flex gap-5'>
        {/* name */}
        <div className="w- max-w-[800px]">
          <p className="mb-2 font-medium">Product name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Type here" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
        </div>
      </div>

      <button type="submit" className="w-28 mt-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">ADD</button>
    </form>

  )
}

export default AddMenu

// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import axios from "axios"
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const AddProduct = ({ token }) => {

//   // State Variables
//   const [image, setImage] = useState(false)

//   const [name, setName] = useState("")
//   const [description, setDescription] = useState("")
//   const [price, setPrice] = useState("")
//   const [category, setCategory] = useState("Salad")

//   const onSubmitHandler = async (e) => {

//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("name", name)
//       formData.append("description", description)
//       formData.append("category", category)
//       formData.append("price", price)
//       formData.append("image", image)

//       const response = await axios.post(backendUrl + "/api/product/add", formData, {headers: { Authorization: `Bearer ${token}`}})
//       if(response.data.success){
//         toast.success(response.data.message);
//         setName("")
//         setDescription("")
//         setImage(false)
//         setPrice("")
//       }else{
//         toast.error(response.data.message);
//       }


//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)

//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-5 px-6">
//       <div className="w-full max-w-[800px]">
//         <p className="mb-2 font-medium">Upload Image</p>
//         <div className="flex gap-3 flex-wrap">
//           <label htmlFor="image">
//             <img className="w-20 border border-gray-300 rounded-md cursor-pointer" src={!image ? assets.upload_area : URL.createObjectURL(image)} />
//             <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
//           </label>
//         </div>
//       </div>

//       <div className='flex gap-5'>
//         {/* name */}
//         <div className="w- max-w-[800px]">
//           <p className="mb-2 font-medium">Product name</p>
//           <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Type here" className="w-full border border-gray-300 rounded-md px-3 py-2" required />
//         </div>
//         {/* category */}
//         <div className="flex-1">
//           <p className="mb-2 font-medium">Product category</p>
//           <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
//             <option value="Salad">Salad</option>
//             <option value="Rolls">Rolls</option>
//             <option value="Deserts">Deserts</option>
//             <option value="Sandwich">Sandwich</option>
//             <option value="Cake">Cake</option>
//             <option value="Pure-Veg">Pure Veg</option>
//             <option value="Pasta">Pasta</option>
//             <option value="Noodles">Noodles</option>
//           </select>
//         </div>
//         {/* price */}
//         <div className="flex-1">
//           <p className="mb-2 font-medium">Product price</p>
//           <input onChange={(e) => setPrice(e.target.value)} value={price} className="w-full border border-gray-300 rounded-md px-3 py-2" type="Number" placeholder="25" required />
//         </div>
//       </div>


//       <div className="w-full max-w-[800px]">
//         <p className="mb-2 font-medium">Product description</p>
//         <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Write content here" className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none" required />
//       </div>

//       <button type="submit" className="w-28 mt-4 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">ADD</button>
//     </form>

//   )
// }

// export default AddProduct
import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../config";
import { toast } from "react-toastify";

const AddProduct = ({ token }) => {

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Salad");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login again");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage(null);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-5 px-6">
      {/* Image */}
      <label htmlFor="image">
        <img src={!image ? assets.upload_area : URL.createObjectURL(image)} className="w-20 border rounded-md cursor-pointer" />
        <input id="image" type="file" accept="image/*" hidden onChange={(e) => setImage(e.target.files[0])} />
      </label>

      {/* Name / Category / Price */}
      <div className="flex gap-5 w-full">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product name" className="border px-3 py-2 rounded-md w-full" />
        <select onChange={(e) => setCategory(e.target.value)} value={category} className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white cursor-pointer">
          <option value="Salad">Salad</option>
          <option value="Rolls">Rolls</option>
          <option value="Deserts">Deserts</option>
          <option value="Sandwich">Sandwich</option>
          <option value="Cake">Cake</option>
          <option value="Pure-Veg">Pure Veg</option>
          <option value="Pasta">Pasta</option>
          <option value="Noodles">Noodles</option>
        </select>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="border px-3 py-2 rounded-md w-full" />
      </div>

      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border px-3 py-2 rounded-md w-full h-24" />

      <button className="bg-black text-white px-6 py-3 rounded-md">ADD</button>
    </form>
  );
};

export default AddProduct;

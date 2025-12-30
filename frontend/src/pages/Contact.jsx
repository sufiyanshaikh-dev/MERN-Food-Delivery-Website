import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import Footer from '../components/Footer.jsx';
import { useContext } from 'react';
import { FoodContext } from '../context/FoodContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textArea, setTextArea] = useState("");

  const {backendUrl, token} = useContext(FoodContext)

  const onSubmitHandler = async (event) => {

    event.preventDefault()
    if(!token) return

    try {
      const response = await axios.post(backendUrl + "/api/email/add", {name, email, phone, textArea}, {headers: {Authorization: `Bearer ${token}`}})
      if(response.data.success){
        toast.success(response.data.message);
        setName("");
        setPhone("");
        setEmail("");
        setTextArea("");
      }else{
        toast.error("Some error occured in adding the product");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>    

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className='w-full md:max-w-[480px] rounded-xl' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@quickbite.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers At QuickBite</p>
          <p className='text-gray-500'>Interested in joining our team network.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mb-28'>
        <h1 className='text-gray-950 text-5xl font-semibold font-mono'>Let's talk over</h1>
        <h1 className='text-[#FF6D1F] text-5xl font-semibold font-mono mt-4'>coffee.</h1>
        <p>Whether you want to book a large event, share a family recipe, or just say hello, our door is always open.</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-start gap-5 mb-24'>
        {/* Left Column: Message Form */}
        {isSubmitted ?
          <div className='md:w-1/2 bg-white rounded-xl p-8 shadow-md flex flex-col items-center gap-6 text-center'>
            <div className='relative'>
              <img src={assets.mail} alt='' className='w-64' />
            </div>
            <h2 className='text-2xl font-semibold text-[#FF6D1F]'>Message Sent Successfully!</h2>
            <p className='text-gray-600'>Thank you for reaching out. We’ll get back to you shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className='bg-[#FF6D1F] text-white rounded-xl px-6 py-3 hover:bg-[#EA580C] transition-colors font-semibold'>Send Another Message</button>
          </div>
          :
          <form onSubmit={onSubmitHandler} className='md:w-1/2 bg-white rounded-xl p-8 shadow-md flex flex-col gap-6'>
            <h2 className='text-3xl font-semibold text-[#FF6D1F] mb-[-10px]'>Send us a note</h2>
            <p className='text-gray-600'>We read every message with our morning espresso. Share your thoughts or book a table.</p>

            <div className='flex gap-4'>
              <div>
                <p className='text-[#FF6D1F] font-semibold'>YOUR NAME</p>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Your Name' className='flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#FF6D1F]' required />
              </div>

              <div>
                <p className='text-[#FF6D1F] font-semibold'>PHONE</p>
                <input type='tel' onChange={(e) => setPhone(e.target.value)} value={phone} placeholder='Phone (Optional)' className='flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#FF6D1F]' />
              </div>
            </div>

            <p className='text-[#FF6D1F] font-semibold mb-[-23px]'>EMAIL ADDRESS</p>
            <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Your Email' className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#FF6D1F]' required />

            <p className='text-[#FF6D1F] font-semibold mb-[-23px]'>YOUR MESSAGE</p>
            <textarea placeholder='Your Message' rows={5} onChange={(e) => setTextArea(e.target.value)} value={textArea} className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#FF6D1F] resize-none'></textarea>

            <button type='submit' onClick={() => setIsSubmitted(true)} className='bg-[#FF6D1F] text-white rounded-xl px-6 py-3 hover:bg-[#EA580C] transition-colors font-semibold'>Send Message</button>
          </form>

        }

        {/* Right Column */}
        <div className='w-80 h-[604px] bg-[#FF6D1F] rounded-xl p-8 flex flex-col gap-12'>
          <div>
            <h3 className='text-2xl font-semibold text-white mb-10'>Come Visit Us</h3>
            <hr className='mt-[-25px] mb-12' />
            <p className='text-black text-2xl font-semibold'>Our Kitchen</p>
            <p className='text-white'>123 Maple Avenue, Sunnyville, CA 90210</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-black mb-2'>Give Us a Ring</h3>
            <p className='text-white'>(555) 867-5309</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-black mb-2'>Opening Hours</h3>
            <p className='text-white'>Mon - Fri: 8am - 10pm</p>
            <p className='text-white'>Sat - Sun: 9am - 11pm</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
</>



  )
}

export default Contact

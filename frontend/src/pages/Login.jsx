import React, { useContext, useState } from "react";
import { FoodContext } from "../context/FoodContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Login = ({ isOpen, onClose }) => {

  // State Variables
  const [currentState, setCurrentState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { backendUrl, setToken, token } = useContext(FoodContext);

  if (!isOpen) return null; // do NOT render if closed

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password })
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token)
          onClose();
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password })
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          console.log(response.data.token)
          onClose();
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* ----------------- Card ---------------- */}
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative min-h-[340px]">
        <button onClick={onClose} className="absolute right-6 text-gray-600 hover:text-black">✕</button>
        <h2 className="text-xl font-semibold mb-4 text-start">{currentState === "Sign Up" ? "Sign Up" : "Login"}</h2>
        {/* --------------- Name Input (only for Sign Up) ------------- */}
        {currentState !== "Login" && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-800 p-2 rounded mb-3" required />}
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" className="w-full border border-gray-800 p-2 rounded mb-3" required />
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" className="w-full border border-gray-800 p-2 rounded mb-4" required />
        <button type="submit" className="w-full bg-[#FF6D1F] text-white mb-2 p-2 rounded hover:bg-[#e55b1c]">{currentState === "Login" ? "Login" : "Create account"}</button>
        <div className="flex items-start gap-2">
          <input type="checkbox" className="mt-[4px]" />
          <p className="text-sm text-gray-600 flex-1">By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <p className="text-sm text-gray-600">Already have an account?</p>
          {
            currentState === "Sign Up"
              ? <p onClick={() => setCurrentState("Login")} className="text-[#FF6D1F] text-sm font-semibold cursor-pointer">Login</p>
              : <p onClick={() => setCurrentState("Sign Up")} className="text-[#FF6D1F] text-sm font-semibold cursor-pointer">Sign Up</p>
          }
        </div>

      </div>
    </form>

  )
};

export default Login;
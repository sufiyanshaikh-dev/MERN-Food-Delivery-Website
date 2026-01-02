import React, { useContext, useState } from "react";
import { FoodContext } from "../context/FoodContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Login = ({ isOpen, onClose }) => {

  const [currentState, setCurrentState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { backendUrl, setToken } = useContext(FoodContext);

  if (!isOpen) return null;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", { name, email, password })
        if (response.data.success) {
          setToken(response.data.token); localStorage.setItem("token", response.data.token); onClose();
        } else toast.error(response.data.message)
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password })
        if (response.data.success) {
          setToken(response.data.token); localStorage.setItem("token", response.data.token); onClose();
        } else toast.error(response.data.message)
      }
    } catch (error) { console.log(error); toast.error(error.message) }
  }

  return (
    <form onSubmit={onSubmitHandler} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md shadow-lg relative min-h-[340px]">
        <button onClick={onClose} className="absolute right-4 sm:right-6 top-4 sm:top-6 text-gray-600 hover:text-black text-lg sm:text-xl">✕</button>
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-start">{currentState === "Sign Up" ? "Sign Up" : "Login"}</h2>
        {
        currentState !== "Login" && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-800 p-2 sm:p-3 rounded mb-3 text-sm sm:text-base" required />
        }
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-800 p-2 sm:p-3 rounded mb-3 text-sm sm:text-base" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-800 p-2 sm:p-3 rounded mb-4 text-sm sm:text-base" required />
        <button type="submit" className="w-full bg-[#FF6D1F] text-white mb-2 p-2 sm:p-3 rounded hover:bg-[#e55b1c] text-sm sm:text-base">{currentState === "Login" ? "Login" : "Create account"}</button>
        <div className="flex items-start gap-2"><input type="checkbox" className="mt-[4px]" /><p className="text-xs sm:text-sm text-gray-600 flex-1">By continuing, I agree to the terms of use & privacy policy</p></div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-6 text-sm sm:text-base"><p className="text-gray-600">Already have an account?</p>{currentState === "Sign Up" ? <p onClick={() => setCurrentState("Login")} className="text-[#FF6D1F] font-semibold cursor-pointer">Login</p> : <p onClick={() => setCurrentState("Sign Up")} className="text-[#FF6D1F] font-semibold cursor-pointer">Sign Up</p>}</div>
      </div>
    </form>
  )
};

export default Login;

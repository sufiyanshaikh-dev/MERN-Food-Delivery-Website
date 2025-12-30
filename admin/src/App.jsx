// import React, { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import SideBar from './components/SideBar';
// import AddProduct from './pages/AddProduct';
// import ProductList from './pages/ProductList';
// import AddMenu from './pages/AddMenu';
// import ListMenu from './pages/ListMenu';
// import Order from './pages/Order';
// import SubNavbar from './components/SubNavbar';
// import Login from './components/Login';

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
// const currency = "$";
// const App = () => {

//     // State Variables
//     const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")
//     const [active, setActive] = useState("product");
//     const [subActive, setSubActive] = useState("add");

//     const renderPage = () => {
//         if (active === "product" && subActive === "add") return <AddProduct token={token} />;
//         if (active === "product" && subActive === "list") return <ProductList token={token} />;
//         if (active === "orders") return <Order token={token} />;
//         if (active === "menu" && subActive === "addMenu") return <AddMenu token={token} />;
//         if (active === "menu" && subActive === "menuList") return <ListMenu token={token} />;
//     };

//     useEffect(() => {
//         if (token) localStorage.setItem("token", token);
//         else localStorage.removeItem("token");
//     }, [token]);


//     return (

//         <div>
//             <ToastContainer position="top-center" autoClose={2000} />
//             {
//                 token == "" ? <Login setToken={setToken} token={token} /> :

//                     <>
//                         <Navbar setToken={setToken} token={token} />
//                         <div className='px-5'>
//                             <hr />
//                         </div>
//                         <SubNavbar active={active} subActive={subActive} setSubActive={setSubActive} />
//                         <div className="flex">
//                             <SideBar active={active} setActive={setActive} />
//                             <div className="flex-1 p-6">{renderPage()}</div>
//                         </div>
//                         <Routes>
//                             <Route path='/product/add' element={<AddProduct token={token} />} />
//                             <Route path='/product/list' element={<ProductList token={token} />} />
//                             <Route path='/orders' element={<Order token={token} />} />
//                             <Route path='/menu/add' element={<AddMenu token={token} />} />
//                             <Route path='/menu/list' element={<ListMenu token={token} />} />
//                         </Routes>
//                     </>
//             }
//         </div>
//     )
// }

// export default App
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import SubNavbar from "./components/SubNavbar";
import Login from "./components/Login";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import AddMenu from "./pages/AddMenu";
import ListMenu from "./pages/ListMenu";
import Order from "./pages/Order";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";


export const backendUrl = import.meta.env.VITE_BACKEND_URL
const currency = "$";

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [active, setActive] = useState("product");
  const [subActive, setSubActive] = useState("add");

  useEffect(() => {
    token ? localStorage.setItem("token", token) : localStorage.removeItem("token");
  }, [token]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      {!token ? (
        <Routes>
          <Route path="*" element={<Login setToken={setToken} />} />
        </Routes>
      ) : (
        <>
          <Navbar token={token} setToken={setToken} />
          <SubNavbar active={active} subActive={subActive} setSubActive={setSubActive} />

          <div className="flex">
            <SideBar active={active} setActive={setActive} />

            <div className="flex-1 p-6">
              <Routes>
                <Route path="/product/add" element={<AddProduct token={token} />} />
                <Route path="/product/list" element={<ProductList token={token} />} />
                <Route path="/orders" element={<Order token={token} />} />
                <Route path="/menu/add" element={<AddMenu token={token} />} />
                <Route path="/menu/list" element={<ListMenu token={token} />} />
                <Route path="*" element={<Navigate to="/product/add" />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;

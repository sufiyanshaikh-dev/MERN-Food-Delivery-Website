import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const FoodContext = createContext(null);

const FoodContextProvider = ({ children }) => {

    // ------------- State Variables ---------------
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState(() => localStorage.getItem("token") || "");
    const [category, setCategory] = useState("All");

    // --------------- Basic app data -----------------
    const backendUrl = import.meta.env.VITE_BACKEND_URL?.trim();
    const navigate = useNavigate();
    const delivery_fee = 40;
    const currency = "$";

    // ------------------ Add To Cart -------------------- 
    const addToCart = async (itemId) => {

        if (!token) return toast.error("User isn't Logged In")

        try {
            await axios.post(backendUrl + "/api/cart/add", { itemId }, { headers: { Authorization: `Bearer ${token}` } })
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }

        setCartItems((prev) => {
            const cartData = structuredClone(prev);
            cartData[itemId] = (cartData[itemId] || 0) + 1;
            return cartData;
        });
    }

    // ---------------- Cart count ---------------
    const getCartCount = () => {
        try {
            let totalCount = 0

            for (const itemId in cartItems) { totalCount += cartItems[itemId] }
            return totalCount
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    }

    // --------------- Cart Amount ----------------
    const getCartAmount = () => {
        try {
            let totalAmount = 0
            for (const itemId in cartItems) {
                const itemInfo = products.find((p) => p._id === itemId)
                if (!itemInfo) continue

                const quantity = cartItems[itemId];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity
                }
            }

            return totalAmount;
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // ------------------ Update Cart -------------------
    const updateCart = async (itemId, quantity) => {

        setCartItems((prev) => {
            let cartData = structuredClone(prev);
            if (cartData[itemId] !== undefined) {
                cartData[itemId] = quantity;
            }

            return cartData
        })

        if (token) {
            try {
                await axios.post(backendUrl + "/api/cart/update", { itemId, quantity }, { headers: { Authorization: `Bearer ${token}` } })
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    }

    // ---------------- Fetching Products -----------------
    const fetchProductData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/product/list")
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    // ------------------ Fetch menu data --------------------
    const fetchMenuData = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/menu/list")
            if (response.data.success) {
                setMenu(response.data.menu)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.get(backendUrl + "/api/cart/get", { headers: { Authorization: `Bearer ${token}` } })
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (localToken) {
            setToken(localToken);
            getUserCart(localToken);
        }
    }, []);

    useEffect(() => {
        if (backendUrl) {
            fetchProductData();
            fetchMenuData()
        }
        else toast.error("Backend URL missing in environment variables!");
    }, [backendUrl]);

    const value = {
        backendUrl,
        products,
        setProducts,
        menu,
        setMenu,
        navigate,
        token,
        setToken,
        addToCart,
        getCartAmount,
        getCartCount,
        updateCart,
        category,
        setCategory,
        cartItems,
        setCartItems,
        delivery_fee,
        currency
    }



    return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
}

export default FoodContextProvider
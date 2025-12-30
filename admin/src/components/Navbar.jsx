import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Login from "./Login";

const Navbar = ({token, setToken}) => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate(<Login />)
    }

    return (
        <nav className="flex items-center justify-between w-full h-16 px-9 ">
            {/* RIGHT — Logo */}
            <img src={assets.real_logo} alt="Logo" className="h-10 w-auto object-contain" />

            {/* LEFT — Logout Button */}
            <button onClick={handleLogout} className="px-6 py-2 rounded-2xl bg-gray-700 text-white hover:bg-gray-700 transition">
                {
                    token ? "Logout" : "Sign In"
                }
            </button>
        </nav>
    );
};

export default Navbar;

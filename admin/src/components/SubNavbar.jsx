
const SubNavbar = ({ active, subActive, setSubActive }) => {
    return (
        <div className="h-12 flex items-center gap-9 pl-72 border-b bg-gray-50">

            {/* -------------------- products --------------------- */}
            {active === "product" && (
                <>
                    <button onClick={() => setSubActive("add")} className={subActive === "add" ? "font-semibold" : ""}>Add Product</button>
                    <button onClick={() => setSubActive("list")} className={subActive === "list" ? "font-semibold" : ""}>Product List</button>
                </>
            )}

            {active === "orders" && (<span className="font-semibold">Orders</span>)}

            {/* ------------------------ menu ---------------------- */}
            {active === "menu" && (
                <>
                    <button onClick={() => setSubActive("addMenu")} className={subActive === "addMenu" ? "font-semibold" : ""}>Add Menu</button>
                    <button onClick={() => setSubActive("menuList")} className={subActive === "menuList" ? "font-semibold" : ""}>Menu List</button>
                </>
            )}

        </div>
    );
};

export default SubNavbar;

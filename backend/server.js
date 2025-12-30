import "dotenv/config";
import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import menuRouter from "./routes/menuRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import cartRouter from "./routes/cartRoutes.js";
import emailRouter from "./routes/emailRoutes.js";

// App Config
const app = express();
const PORT = 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// API EndPoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/menu", menuRouter);
app.use("/api/cart", cartRouter);
app.use("/api/email", emailRouter)

app.get("/", (req, res) => {
    res.send("API WORKING")
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
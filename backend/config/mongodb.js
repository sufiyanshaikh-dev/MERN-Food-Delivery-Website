import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on("connected", () => {
        console.log("DB connected")
    })

    mongoose.connect(`${process.env.MONGODB_URI}/foodApp`)
        .then(() => console.log("✅ MongoDB connected successfully"))
        .catch((err) => console.error("❌ MongoDB connection failed:", err));
        
}

export default connectDB
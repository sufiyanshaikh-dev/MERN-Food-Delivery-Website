// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on("connected", () => {
//         console.log("DB connected")
//     })

//     mongoose.connect(`${process.env.MONGODB_URI}/foodApp`)
//         .then(() => console.log("✅ MongoDB connected successfully"))
//         .catch((err) => console.error("❌ MongoDB connection failed:", err));
        
// }

// export default connectDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "foodApp",  // optional if not in URI
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }

  mongoose.connection.on("connected", () => {
    console.log("DB event: connected");
  });
};

export default connectDB;

import mongoose from "mongoose";

const connectDB = async function(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    } catch (error) {
        console.error("MongoDB connection failed due to: ",error)
        process.exit(1)
    }
}

export default connectDB;
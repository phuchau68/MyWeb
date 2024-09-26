import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://phuchau0608lt:08062005@cluster0.ds7zr.mongodb.net/food-dev').then(()=>console.log("DB Connected"));
}
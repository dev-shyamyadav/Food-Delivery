import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tempmongodb:temp@cluster0.lbimt.mongodb.net/Food-Delivery').then(() => console.log("DB Connected"));
} 
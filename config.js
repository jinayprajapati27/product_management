import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=> {
        console.log("Database Connect Successfully");
    }).catch((err) => {
        console.error(`Error : ${err}`)
    })
};
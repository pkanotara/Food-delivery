import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://22bce139:98765432@cluster0.0fiivkd.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}
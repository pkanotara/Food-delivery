import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://<Username>:<Password>@cluster0.0fiivkd.mongodb.net/').then(()=>{
       console.log('DB connected') ;
    })
}

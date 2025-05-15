import mongoose from "mongoose";
import 'dotenv/config.js';

let url = process.env.URL_MONGO

async function connectDB() {
    try{
        await mongoose.connect(url)
        console.log("database connected");
        
    } catch (error){
        console.log(error)
    }
}

connectDB()
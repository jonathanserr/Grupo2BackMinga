import mongoose from "mongoose";
import 'dotenv/config.js';

let url = process.env.URL_MONGO

async function connectDB() {
    try{
        await mongoose.connect(process.env.URL_MONGO)
        console.log("database connected");
        
    } catch (error){
        
    }
}

connectDB()
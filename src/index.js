import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
// what we learning here is database connection, and how it is done
import connectDB from "./db/index.js";
import dotenv from "dotenv"; 
dotenv.config(
    {
        path: "./.env"
    }
); // Load environment variables from .env file, we do this cause we want dotenv file get accessed by all the files from the start

connectDB();

// import express from "express";
// const app = express();


// //iffies for direct execution with out calling -> ;()()
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         //to listen
//         app.on("error", (error) => {
//             console.error("Failed to connect to database,", error)
//             throw new error("Failed to connect to database")
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error connecting to database", error)
//         throw error
//     }
// })()
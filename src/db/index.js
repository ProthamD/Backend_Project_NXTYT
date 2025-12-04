import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const coonectDB = async () =>{
    try {
        //in index,js of the outer one file we didnt try to store the mongoose in a varibale actually we can store mongoose returned object in a varibale as mongoose returns an object
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected successfully at DB_HOST : ${connectionInstance.connection.host} `);    
    } catch (error) {
        console.error("Error connecting to database", error)
        //throw error
        //new thing we can also do a process exit u8sing process.exit() in node
        process.exit(1); // Exit the process with a failure code
    }
}

export default coonectDB;
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
//readd in npm cors page about whitelisting some other, not all
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// setting middleware

//1. for form as json acceptance
app.use(express.json({
    limit: "16kb"
}))

//2.  now what if we get data from url
app.use(express.urlencoded({
    extended: true,//objects bhitore objects, nested objects, read!!
    limit: "16kb"
}))

//3. making a public assest where we will store images, pdfs etc.
app.use(express.static("public"))

//4. to control cookies in users browser, it can ve read only by server and control by server 
app.use(cookieParser());
export {app}
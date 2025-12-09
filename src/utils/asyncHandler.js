import { request } from "express";

const asyncHandler = (requestHandler) => 
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err));
            // above one return all tyoe of errors , as it wraps all errors into promises an
    }

export {asyncHandler};

// const asynchandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
        
//     } catch (error) {
//          res.status(err.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//          });
//     }
// }

// const fn = async (req, res, next) => {
//     // 1. Get data from request
//     const { email, password } = req.body;
    
//     // 2. Do database operations (async)
//     const user = await User.findOne({ email });
    
//     // 3. Send response
//     res.status(200).json({ success: true, user });
// }
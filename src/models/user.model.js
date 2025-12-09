import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true // fpr searching feild enabling we need to make index true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type: String, // cloudnary URL
        required: true,

    },
    coverimage:{
        type: String, // cloudnary URL
    },
    watchHistory:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password:{
        type: String,
        required: [true, "Password is required"],

    },
    refreshToken:{
        type: String,
    }

},
{
    timestamps: true
}
);


// now befor save we need to encrypt the password so we will use a hook from mongoose
userSchema.pre("save", async function(next){
    //if password is not modified we dont need to encrypt it and save it again and again so thats why we will use an if condition
    if(!this.isModified("password")){
        return next();
    }
    //otherwise
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password, this.password);
}

userSchema.generateAccessToken = function (){
   return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
        fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}

userSchema.generateRefreshToken = function (){
   return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}


export const User = mongoose.model("User", userSchema);

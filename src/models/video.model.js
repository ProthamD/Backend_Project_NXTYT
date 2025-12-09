import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema({
    videoFile:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true, 
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    duration:{
        type : Number, // from cloudnary
        required: true,
    },
    views:{
        type: Number,
        default: 0,
    },
    isPublished:{
        type: Boolean,
        default: false,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }

},{timestamps: true});


//there are mongoose aggregate and npm aggregate, it is important so read!!
videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", userSchema);
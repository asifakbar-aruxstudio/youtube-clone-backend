import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type : String ,
            required : true // cloudinery 
        },
        thumbnail: {
            type : String ,
            required : true // cloudinery url 
        },
        title:{
            type : String ,
            required : true // cloudinery 
        },
        description:{
            type : String ,
            required : true // cloudinery 
        },
        duration:{
            type : Number ,
            required : true // cloudinery 
        },
        view:{
            type : Number ,
            default : 0 // cloudinery 
        },
        isPublished:{
            type : Boolean ,
            default : true // cloudinery 
        },
        owner :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
        }
    },
    {timestamps: true});


    videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema);
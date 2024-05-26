import mongoose from "mongoose";
import categoryCollection from "./categoryModel.js";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:categoryCollection
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const productCollection = mongoose.model("productCollection",productSchema)

export {productCollection}
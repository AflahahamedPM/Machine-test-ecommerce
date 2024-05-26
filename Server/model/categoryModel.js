import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:String
})

const categoryCollection = mongoose.model("categoryCollection",categorySchema)

export default categoryCollection
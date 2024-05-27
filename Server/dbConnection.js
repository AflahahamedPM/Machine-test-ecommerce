import mongoose from "mongoose";
function dbConnection(){
    mongoose.connect("mongodb+srv://pmsamshad91:dgFmDwFcrAuzfFHw@cluster0.8xtbk7s.mongodb.net/test2?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log('connected to database');
    })
    .catch((e)=>{console.error(e)})
}

export default dbConnection
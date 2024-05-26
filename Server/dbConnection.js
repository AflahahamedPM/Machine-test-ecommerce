import mongoose from "mongoose";
function dbConnection(){
    mongoose.connect("mongodb://localhost:27017/test2")
    .then(()=>{
        console.log('connected to database');
    })
    .catch((e)=>{console.error(e)})
}

export default dbConnection
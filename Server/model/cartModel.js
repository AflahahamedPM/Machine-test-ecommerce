import mongoose, { mongo } from "mongoose";
import userInfo from "./userModel";
import productCollection from "./productModel";

const cartSchema = new mongoose.Schema({
    customer:{
        type:mongoose.Types.ObjectId,
        ref:userInfo
    },
    totalPrice:Number,
    totalQuantity:{
        type:Number,
        default:0
    },
    products:[
        {
            name:{
                type:mongoose.Types.ObjectId,
                ref:productCollection
            },
            quantity:{
                type:Number,
                default:1,
                min:1
            },
            price:Number,
        }
    ]
})

const cartCollection = mongoose.model("Cart",cartSchema)

export default cartCollection;
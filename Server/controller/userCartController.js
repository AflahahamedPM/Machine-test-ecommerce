import userInfo from "../model/userModel.js";
import cartCollection from "../model/cartModel.js";
import { productCollection } from "../model/productModel.js";
import mongoose from "mongoose";

export const showCart = async (req, res) => {
  try {
    const { _id } = req.body.data;
    const cartProducts = await cartCollection.findOne({ customer: _id });
    res.json({ data: cartProducts });
  } catch (err) {
    res.json({ error: err });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userInfo, productId } = req.body;
    const customerCart = await cartCollection.findOne({
      customer: userInfo._id,
    });
    console.log(customerCart);
    const product = await productCollection.findById(productId);
    console.log(product);
    const productExist = await cartCollection.findOne({
      _id: customerCart._id,
      products: {
        $elemMatch: { name: new mongoose.Types.ObjectId(productId) },
      },
    });
    if (productExist) {
      await cartCollection.updateOne(
        {
          _id: customerCart._id,
          products: {
            $elemMatch: {
              name: new mongoose.Types.ObjectId(productId),
            },
          },
        },
        {
          $inc: {
            "products.$.quantity": 1,
            totalPrice: product.price,
            totalQuantity: 1,
            "products.$.price": product.price,
          },
        }
      );
      res.json({ data: "product count added" });
    } else {
      await cartCollection.findByIdAndUpdate(customerCart._id, {
        $push: {
          products: [
            {
              name: new mongoose.Types.ObjectId(productId),
              price: product.price,
            },
          ],
        },
        $inc: {
          totalPrice: product.price,
          totalQuantity: 1,
        },
      });
      res.json({ data: "product added" });
    }
  } catch (err) {
    res.json({ error: err });
  }
};

export const getCartSingleProduct = async(req,res) => {
    try {
        const {productId}= req.body;
        const product = await productCollection.findById(productId)
        res.json({data:product})
    } catch (err) {
        res.json({error:err})
    }
}


export const removeProductFromCart = async(req,res)=>{
    const{productId,userId}=req.body;
    // console.log(productId , userId);
    const userCart = await cartCollection.aggregate([
        {
            $match:{
                customer: new mongoose.Types.ObjectId(userId)
            },
        },
        {
            $unwind:"$products"
        },
        {
            $match:{
                "products.name":new mongoose.Types.ObjectId(productId)
            }
        },
    ])

    console.log("user cart - ",userCart);
    const currentCartId = userCart[0]._id

    await cartCollection.findByIdAndUpdate(currentCartId, {
        $pull: {
          products: {
            name: productId,
          },
        },
        $inc: {
          totalPrice: -userCart[0].products.price,
          totalQuantity: -userCart[0].products.quantity,
        },
      });
    
      res.json({data:"succesfully removed"})
}
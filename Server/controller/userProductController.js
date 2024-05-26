import {productCollection} from "../model/productModel.js";

export const getAllProducts = async(req,res) =>{
    try {
        const productList = await productCollection.find()
        res.json({data:productList})
    } catch (err) {
        console.log(err);
        res.json({error:err})
    }
}

export const getLatestProducts = async(req,res)=>{
    try {
        const latestProductList = await productCollection.find().sort({createdAt:-1}).limit(3)
        res.json({data:latestProductList})
    } catch (err) {
        res.json({error:err})
    }
}

export const getSingleProduct = async (req,res) => {
    try {
        const{productId} = req.body
        const getProduct = await productCollection.findById(productId)
        const productCategory = getProduct.category
        const similarProducts = await productCollection.find({category:productCategory}).limit(3).sort({createdAt:-1})
        res.json({data:getProduct,similarProducts:similarProducts})
    } catch (err) {
        res.json({error:err})
    }
}
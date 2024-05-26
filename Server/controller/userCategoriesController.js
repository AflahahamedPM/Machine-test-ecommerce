import categoryCollection from "../model/categoryModel.js";
import { productCollection } from "../model/productModel.js";

export const getAllCategories = async(req,res)=>{
    try {
        const categoryList = await categoryCollection.find()
        res.json({data:categoryList})
    } catch (err) {
        console.log(err);
        res.json({error:err})
    }
}

export const getCategoryProducts = async(req,res) => {
    try {
        const {category} = req.body
        let getCategoryId = await categoryCollection.find({name:category})
        if(!getCategoryId) res.json({data:"No category present"})
        getCategoryId = getCategoryId[0]._id;
        const getCategoryProducts = await productCollection.find({category:getCategoryId._id})
        res.json({data:getCategoryProducts})

    } catch (error) {
        
    }
}
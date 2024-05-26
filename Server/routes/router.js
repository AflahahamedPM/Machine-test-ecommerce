import express from "express"
const router = express.Router()

import { homePage, postSignup, postLogin} from "../controller/userHomeController.js"
import { getAllProducts, getLatestProducts, getSingleProduct} from "../controller/userProductController.js"
import { getAllCategories, getCategoryProducts} from "../controller/userCategoriesController.js"

router.get("/",homePage)
router.post("/login",postLogin)
router.post("/signup",postSignup)
router.get("/allProducts",getAllProducts)
router.get("/allCategories",getAllCategories)
router.post("/categoryProduct",getCategoryProducts)
router.get("/latestProducts",getLatestProducts)
router.post("/singleProduct",getSingleProduct)

export default router
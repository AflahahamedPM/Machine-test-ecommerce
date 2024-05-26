import express from "express"
const router = express.Router()

import { homePage, postSignup, postLogin} from "../controller/userHomeController.js"
import { getAllProducts, getLatestProducts, getSingleProduct} from "../controller/userProductController.js"
import { getAllCategories, getCategoryProducts} from "../controller/userCategoriesController.js"
import { showCart, addToCart, getCartSingleProduct, removeProductFromCart} from "../controller/userCartController.js"

router.get("/",homePage)
router.post("/login",postLogin)
router.post("/signup",postSignup)
router.get("/allProducts",getAllProducts)
router.get("/allCategories",getAllCategories)
router.post("/categoryProduct",getCategoryProducts)
router.get("/latestProducts",getLatestProducts)
router.post("/singleProduct",getSingleProduct)
router.post("/cart",showCart)
router.post("/addToCart",addToCart)
router.post("/cartSingleProductDetails",getCartSingleProduct)
router.post("/removeProduct",removeProductFromCart)

export default router

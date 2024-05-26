import Navbar from "./Navbar"
import bannerImg from "../assets/images/bannerImg.png"
import CategoryList from "./CategoryList"
import LatestProductList from "./LatestProductsList"

const Home = ()=>{
return(
    <div>
        <Navbar/>
        <img className="lg:w-[95%] max-lg:w-11/12 lg:ml-8 max-lg:ml-8 max-md:ml-4 mb-10" src={bannerImg} alt="" />
        <CategoryList/>
        <LatestProductList />
    </div>
)
}

export default Home

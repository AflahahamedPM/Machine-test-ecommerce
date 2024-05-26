import { useState, useEffect} from "react";
import { SERVER_LINK } from "../constants";
import LatestProductCard from "./LatestProductCard";

const LatestProductList = () => {
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(()=>{getLatestProducts()},[])

    const getLatestProducts = async () => {
        const response = await fetch(`${SERVER_LINK}/latestProducts`)
        const data = await response.json()
        console.log(data.data)
        setLatestProducts(data.data)
    }

    return(
        <>
        <div className="flex justify-center items-center lg:my-10 space-x-4 uppercase lg:text-5xl max-lg:text-2xl max-sm:text-xl text-gray-800 font-semibold tracking-wide">
            <h1>latest products</h1>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto space-x-2">
        {latestProducts.length !== 0 ? (
          latestProducts.map((product) => (
            <LatestProductCard key={product._id} data={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
    )
}

export default LatestProductList
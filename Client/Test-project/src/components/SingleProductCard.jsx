import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SERVER_LINK } from "../constants";
import SimilarProductsCard from "./SimilarProductsCard";
import Navbar from "./Navbar";

const SingleProductCard = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([])
  const { _id } = useParams();

  useEffect(() => {
    getSingleProduct();
  }, [_id]);

  const getSingleProduct = async () => {
    const response = await fetch(`${SERVER_LINK}/singleProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: _id }),
    });
    const data = await response.json();
    console.log("single product details - ", data.data);
    console.log("similar products - ",data.similarProducts);
    setSingleProduct(data.data);
    setSimilarProducts(data.similarProducts)
  };

  return (
    <>
      <Navbar />
      {singleProduct.length !== 0 ? (
        <>
          <div className="md:flex space-x-28">
            <div
              id="image-container"
              className="xl:ml-[350px] max-xl:ml-[150px] max-lg:ml-20 max-sm:ml-16 my-10"
            >
              <img
                src={singleProduct.image}
                alt=""
                className="lg:h-[450px] max-lg:h-[350px] max-sm:h-[250px] object-contain"
              />
            </div>
            <div id="detail-container">
              <div className="max-lg:my-18 lg:my-10 space-x-4">
                <h1 className="uppercase lg:text-5xl max-lg:text-4xl lg:ml-2 max-sm:text-xl max-lg:ml-3 sm:mt-28 text-gray-800 font-semibold  tracking-wide mb-5">
                  {singleProduct.name}
                </h1>
                <h1 className="xl:text-lg max-xl:text-base max-lg:text-xs max-sm:hidden text-gray-600 xl:tracking-wider">
                  {singleProduct.description}
                </h1>
                <h1 className="xl:text-lg max-xl:text-base max-lg:text-xs max-sm:-mt-4 max-lg:mt-3 text-gray-600 xl:tracking-wider">
                  Rs.{singleProduct.price}
                </h1>
                <div className="lg:p-4">
                  <button className="lg:mt-28 max-lg:mt-16 max-sm:mt-6 lg:px-36 max-lg:px-20 max-sm:px-12 max-sm:-ml-12 sm:py-5 max-sm:py-3 rounded-lg bg-zinc-600 hover:bg-zinc-800 text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center lg:my-10 max-sm:my-8 space-x-4 uppercase lg:text-5xl max-lg:text-2xl max-sm:text-xl text-gray-800 font-semibold tracking-wide">
            <h1>similar products</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto space-x-2">
        {similarProducts.length !== 0 ? (
          similarProducts.map((similarProd) => (
            <SimilarProductsCard key={similarProd._id} data={similarProd} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default SingleProductCard;

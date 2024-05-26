import { useEffect, useState } from "react";
import { SERVER_LINK } from "../constants";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import CategoryProductCard from "./CategoryProductCard";
import Footer from "./Footer";

const CategoryProductList = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  const{name} = useParams();

  useEffect(() => {
    getCategoryProducts();
  }, [name]);

  const getCategoryProducts = async () => {
    const response = await fetch(`${SERVER_LINK}/categoryProduct`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({category:name})
    });
    const data = await response.json();
    console.log(data.data);
    setCategoryProducts(data.data);
  };

  return (
    <>
     <Navbar/>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  mx-auto space-x-2">
        {categoryProducts.length !== 0 ? (
          categoryProducts.map((product) => (
            <CategoryProductCard key={product._id} data={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryProductList
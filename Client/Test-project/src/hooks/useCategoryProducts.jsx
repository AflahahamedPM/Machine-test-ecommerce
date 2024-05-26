import { useEffect, useState } from "react";
import { SERVER_LINK } from "../constants";
import { useParams } from "react-router-dom";

const useCategoryProductFetch = () =>{
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
  return{categoryProducts}
} 

export default useCategoryProductFetch
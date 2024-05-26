import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SERVER_LINK } from "../constants";

const useSingleProductFetch = () =>{
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
    setSingleProduct(data.data);
    setSimilarProducts(data.similarProducts)
  };

  return {singleProduct, similarProducts}
}

export default useSingleProductFetch
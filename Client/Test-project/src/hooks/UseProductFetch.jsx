import { useState, useEffect} from "react";
import { SERVER_LINK } from "../constants";

const useProductFetch = () =>{
    const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(`${SERVER_LINK}/allProducts`);
    const data = await response.json();
    console.log(data.data);
    setProducts(data.data);
  };

  return {products}
}

export default useProductFetch
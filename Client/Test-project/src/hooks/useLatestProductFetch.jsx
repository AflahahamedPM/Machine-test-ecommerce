import { useState, useEffect } from "react";
import { SERVER_LINK } from "../constants";

const useLatestProductFetch = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = async () => {
    const response = await fetch(`${SERVER_LINK}/latestProducts`);
    const data = await response.json();
    console.log(data.data);
    setLatestProducts(data.data);
  };

  return {latestProducts}
};

export default useLatestProductFetch;

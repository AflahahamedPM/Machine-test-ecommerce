import { useState, useEffect} from "react";
import { SERVER_LINK } from "../constants";

const useCategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(`${SERVER_LINK}/allCategories`);
    const data = await response.json();
    setCategories(data.data);
  };

  return {categories}
};

export default useCategoryList;

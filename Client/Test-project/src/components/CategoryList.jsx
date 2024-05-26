import { SERVER_LINK } from "../constants";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(`${SERVER_LINK}/allCategories`);
    const data = await response.json();
    setCategories(data.data);
  };

  return (
    <>
        <div className="flex justify-center items-center lg:my-10 space-x-4 uppercase lg:text-5xl max-lg:text-2xl max-sm:text-xl text-gray-800 font-semibold tracking-wide">
            <h1>Categories</h1>
        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto space-x-2">
        {categories.length !== 0 ? (
          categories.map((category) => (
            <CategoryCard key={category._id} data={category} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default CategoryList;

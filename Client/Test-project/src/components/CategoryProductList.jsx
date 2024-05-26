import Navbar from "./Navbar";
import CategoryProductCard from "./CategoryProductCard";
import Footer from "./Footer";
import useCategoryProductFetch from "../hooks/useCategoryProducts";

const CategoryProductList = () => {
  const {categoryProducts} = useCategoryProductFetch()
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
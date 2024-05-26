import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import useProductFetch from "../hooks/UseProductFetch"

const ProductList = () => {
  const{products} = useProductFetch()
  return (
    <>
     <Navbar/>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  mx-auto space-x-2">
        {products.length !== 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} data={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductList;

import Navbar from "./Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import CartCardComponent from "./CartCardComponent";
import Footer from "./Footer";

const CartComponent = () => {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <>
      <Navbar />
      {data?.data?.products?.length === 0 ? (
        <div className="flex justify-center h-[400px] items-center lg:my-10 space-x-4 uppercase lg:text-5xl max-lg:text-2xl max-sm:text-xl text-gray-800 font-semibold tracking-wide">
          <h1>Cart is empty</h1>
        </div>
      ) : (
        data?.data?.products?.map((product) => (
          <React.Fragment key={product._id}>
            <CartCardComponent data={product} />
          </React.Fragment>
        ))
      )}
      <Footer/>
    </>
  );
};

export default CartComponent;

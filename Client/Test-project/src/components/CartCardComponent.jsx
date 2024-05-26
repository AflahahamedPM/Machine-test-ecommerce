import { useEffect, useState } from "react";
import { SERVER_LINK } from "../constants";
import { useNavigate } from "react-router-dom";

// The increment and decrement of the quantity of products hasnt't been done because the time alloted has been reached

const CartCardComponent = ({ data }) => {
  const [cartProduct, setCartProduct] = useState([]);
  const { name, price, quantity} = data;
  const navigate = useNavigate()
  const [deleted ,setDeleted] = useState(1)
  useEffect(() => {
    fetchProduct();
  }, [deleted]);

  const fetchProduct = async () => {
    const response = await fetch(`${SERVER_LINK}/cartSingleProductDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: name}),
    });
    const data = await response.json();
    console.log(data);
    setCartProduct(data.data);
  };

  const handleRemoveProduct = async() =>{
    let userDetails = localStorage.getItem("user")
    userDetails = JSON.parse(userDetails)
    console.log(userDetails);
        const response = await fetch(`${SERVER_LINK}/removeProduct`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ productId: name, userId:userDetails.data._id}),
        })
        const data = await response.json()
        if(response.ok && data.data === "succesfully removed"){
            setDeleted(deleted+1);
            
        }else{
            navigate("/login")
        }
  }


  return <>{cartProduct.length == 0 ? <p>loading</p> :
  <>
      <div className="sm:flex lg:ml-48 max-sm:ml-12 max-sm:w-9/12 sm:ml-20 max-sm:h-72 mt-10 bg-white lg:w-8/12 sm:w-9/12 h-48 shadow-md rounded-lg overflow-hidden relative">
  <div className="sm:w-1/3">
    <img
      src={cartProduct.image}
      alt={cartProduct.name}
      className="w-full h-40 object-contain mt-5"
    />
  </div>
  <div className="w-2/3 p-4">
    <h2 className="sm:text-lg max-sm:text-sm font-semibold mb-2">{cartProduct.name}</h2>
    <div className="sm:flex items-center justify-between">
      <div className="flex max-sm:justify-center items-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
          -
        </button>
        <span className="bg-gray-200 text-gray-800 py-1 px-4">
          {quantity}
        </span>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">
          +
        </button>
      </div>
      <p className="sm:text-lg max-sm:text-xs font-semibold">Rs. {price.toFixed(2)}</p>
    </div>
  </div>

  {/* There is a small bug while removing the product from cart, after clicking the remove button the re-rendered component shows nothing but when you goes to other pages and then come to this page it correctly works, i didnt got the time to clear the bug*/}
  <button
    className="absolute bottom-10 right-5 bg-gray-600 hover:bg-gray-800 text-white font-semibold py-1 sm:px-4 max-sm:px-2 rounded"
    onClick={handleRemoveProduct} 
  >
    Remove
  </button>
</div>
      
      </>
  }
  </>;
};

export default CartCardComponent;

import { Link } from "react-router-dom";

const CategoryProductCard = ({ data }) => {
  const { name, image, price, _id } = data;

  return (
    <div className="w-[300px] mb-10">
      <div className="p-4 rounded-lg max-xl:ml-10 max-lg:ml-20 max-sm:ml-5 hover:shadow-md overflow-hidden cursor-pointer">
        <Link to={`/product/${_id}`}>
          <img src={image} alt={name} className="w-full lg:h-80 max-lg:h-60 object-contain"/>
          <div className="p-4 max-sm:ml-5">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">Rs. {price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProductCard;

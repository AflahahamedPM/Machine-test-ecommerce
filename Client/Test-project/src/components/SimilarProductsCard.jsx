import { Link } from "react-router-dom";

const SimilarProductsCard = ({data}) => {
    const { name, image, price, _id } = data;

    return (
      <div className="w-[300px] mb-10 mx-auto">
        <Link to={`/product/${_id}`}>
          <div className="p-4 rounded-lg hover:shadow-md overflow-hidden cursor-pointer">
            <img src={image} alt={name} className="w-full lg:h-80 max-lg:h-60 object-contain" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 max-lg:ml-7">{name}</h3>
              <p className="text-gray-600 max-lg:ml-7">Rs. {price}</p>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default SimilarProductsCard
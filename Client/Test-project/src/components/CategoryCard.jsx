import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const { image, name } = data;
  return (
    <div className="w-[300px] mb-10 mx-auto">
      <Link to={`/category/${name}`}>
        <div className="p-4 rounded-lg hover:shadow-md overflow-hidden cursor-pointer">
          <img src={image} alt={name} className=" w-full lg:h-80 max-lg:h-60 object-contain" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

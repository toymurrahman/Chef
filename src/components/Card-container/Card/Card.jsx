import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Card = ({ card, handleAddtoCook }) => {
  const { title, description, image, ingredients, details } = card;
  
  return (
    <div className="mt-6 flex justify-center">
      <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <figure className="w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
          />
        </figure>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="py-2 text-gray-600 border-b">{description}</p>

          {/* Ingredients */}
          <div className="py-4 border-b">
            <h3 className="font-bold text-gray-800">Ingredients: {ingredients.length}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
              {ingredients.length > 3 && <li>...and more</li>}
            </ul>
          </div>

          {/* Time & Calories */}
          <div className="flex justify-between items-center text-gray-600 py-4">
            <h1 className="flex items-center">
              <IoMdTime className="mr-2 text-lg" /> {details.time} min
            </h1>
            <h1 className="flex items-center">
              <FaFire className="mr-2 text-lg" /> {details.calories} kcal
            </h1>
          </div>

          {/* Action Button */}
          <div className="mt-4">
            <button
              onClick={() => handleAddtoCook(card)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
              aria-label={`Add ${title} to your cooking list`}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    details: PropTypes.shape({
      time: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  handleAddtoCook: PropTypes.func.isRequired,
};

export default Card;

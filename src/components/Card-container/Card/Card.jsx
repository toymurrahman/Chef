import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

const Card = ({ card, handleAddtoCook }) => {
  const { title, description, image, ingredients, details } = card;
  return (
    <div className="mt-6 ">
      <div className="card bg-base-100 w-full sm:w-96 border shadow-lg">
        <figure className="px-10 pt-10 w-full">
          <img src={image} alt="" className="rounded-xl h-56" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-description py-4 border-b-2 text-gray-500">
            {description}
          </h2>
          <div className="border-b-2 py-4 ">
            <h3 className="font-bold py-4">
              Ingredients : {ingredients.length}
            </h3>
            <ul className="list-disc pl-5 text-gray-500">
              {ingredients.slice(0, 3).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
              {ingredients.length > 3 && <li>...and more</li>}
            </ul>
          </div>
          <div className="card-details py-4 flex text-gray-500">
            <h1 className="flex items-center">
              <IoMdTime className="mr-2" /> {details.time}
            </h1>
            <h1 className="ml-8 flex items-center">
              <FaFire className="mr-2" /> {details.calories}
            </h1>
          </div>

          <div className="card-actions">
            {/* <button onClick={() => handleAddtoCook(card)} className="btn btn-active btn-accent bg-green-400 text-black font-bold hover:bg-green-800 transition rounded-full">
            Want to Cook </button> */}

            <button
              onClick={() => handleAddtoCook(card)}
              className="btn btn-active btn-accent bg-green-400 text-black font-bold hover:bg-green-700 transition rounded-full"
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

export default Card;

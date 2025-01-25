
const Card = ( { card } ) => {
    const { id, title, description, image, ingredients, details } = card;
  return (
    <div>
      <div className="card bg-base-100 w-96 border">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt=""
            className="rounded-xl"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{title}</h2>
          <h2 className="card-description py-4 border-b-2">{description}</h2>
          <div className="border-b-2 py-4 ">
            <h3 className="font-bold py-4">Ingredients : {ingredients.length}</h3>
            <ul className="list-disc pl-5">
              {
              ingredients.slice(0, 3).map((ingredient, index) => (

                <li  key={index}>{ingredient}</li>
              ))
              }
            </ul>
          </div>
          <div>
            <h1></h1>
            <h1></h1>
          </div>
          
          <div className="card-actions">
          <button className="btn btn-active btn-accent bg-green-600 text-black font-bold hover:bg-green-800 transition rounded-full">
            Want to Cook
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

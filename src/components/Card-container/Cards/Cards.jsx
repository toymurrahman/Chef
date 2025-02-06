
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Bookmarks from "../Bookmarks/Bookmarks";

const Cards = ({ handleAddtoCook, wantToCook,setWantToCook }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../../public/recipe.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading recipes...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 mb-6">
      {/* Cards Section */}
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card) => (
          <Card key={card.id} handleAddtoCook={handleAddtoCook} card={card} />
        ))}
      </div>
      
      {/* Bookmarks Section */}
      <div className=" rounded-lg p-4">
        <Bookmarks wantToCook={wantToCook} setWantToCook={setWantToCook}/>
      </div>
    </div>
  );
};

export default Cards;


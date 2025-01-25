import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Bookmarks from "../Bookmarks/Bookmarks";

const Cards = ({ handleAddtoCook,wantToCook }) => {
    const [cards, setCards] = useState([]);
    useEffect(
        () => {
            fetch("/public/recipe.json")
            .then((response) => response.json())
            .then((data) => setCards(data))
        }, []
    )

    return (
       <div className="grid grid-cols-2 mt-16 mb-6  ">
         <div className="w-[50vw]  mx-auto grid grid-cols-2">
           
           {
           cards.map( card => <Card key={card.id}
            handleAddtoCook={handleAddtoCook} card={card} />)
           }
           
       </div>
       {/* Bookmark section */}
       <div className="w-[25vw] mr-4 mx-auto">
       <Bookmarks wantToCook={wantToCook} />
       </div>
       </div>
    );
};

export default Cards;
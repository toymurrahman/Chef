import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(
        () => {
            fetch("/public/recipe.json")
            .then((response) => response.json())
            .then((data) => setCards(data))
        }, []
    )

    return (
       <div>
         <div className="w-2/3 mx-auto grid grid-cols-2 mt-16">
           
           {
           cards.map( card => <Card key={card.id} card={card} />)
           }
       </div>
       {/* Bookmark section */}
       <div>

       </div>
       </div>
    );
};

export default Cards;
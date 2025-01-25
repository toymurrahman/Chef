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
        <div className="w-2/3 mx-auto">
            <h1 className="text-4xl"> cards : {cards.length} </h1>
            {
            cards.map( card => <Card key={card.id} card={card} />)
            }
        </div>
    );
};

export default Cards;
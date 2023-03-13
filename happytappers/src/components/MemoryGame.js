import React, { useEffect, useState } from "react";
import CardTile from "./CardTile";
import { Button } from "react-bootstrap";
const cardImages = [
    { src: "/cards/budgie.png", matched: false },
    { src: "/cards/crane.png", matched: false },
    { src: "/cards/dodo.png", matched: false },
    { src: "/cards/duck.png", matched: false },
    { src: "/cards/flamingo.png", matched: false },
    { src: "/cards/parrot.png", matched: false },
    { src: "/cards//penguin.png", matched: false },
    { src: "/cards/toucan.png", matched: false },
];
// ^ array to track what type of bird generated needed in socket logic. In front end use swith case to plug in image.

export default function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // shuffles the cards - backend
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    };

    // handle card choice
    const handleChoice = (card) => {
        console.log(card);
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    // compares 2 selected cards - backend
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);

            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    // resets card position and starts new turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setDisabled(false);
    };

    // start new game automatically

    return (
        <div className="board">
            <Button onClick={shuffleCards}>New Game</Button>

            <div className="card-grid">
                {cards.map((card) => (
                    <CardTile key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
                ))}
            </div>
        </div>
    );
}

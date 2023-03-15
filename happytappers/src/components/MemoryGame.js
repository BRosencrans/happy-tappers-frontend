import React, { useEffect, useState } from "react";
import CardTile from "./CardTile";
import { Button, Col } from "react-bootstrap";

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
// ^ array to track what type of bird generated needed in socket logic. source should be put in just fine.

export default function MemoryGame(props) {
    const [cards, setCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matches, setMatches] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [counter, setCounter] = React.useState(60);
    const [showFinalScore, setShowFinalScore] = useState(false);
    const [sendFetchOnce, setSendFetchOnce] = useState(true);

    // shuffles the cards - backend
    const shuffleCards = () => {
        // socket.emit("shuffleCards", { roomId, game: "memoryGame" });
        const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setMoves(0);
        setScore(0);
        setCounter(60);
        setMatches(0);
        setShowFinalScore(false);
        setPlaying(true);
    };

    // handle card choice
    const handleChoice = (card) => {
        console.log(card);
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    //compares 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);

            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            setMatches(matches + 1);
                            setScore(matches * 10 - moves * 2);
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

        if (matches == 8 || counter == 0) {
            console.log(matches);
            console.log(counter);

            setPlaying(false);
            if (score < 0) {
                setScore(0);
            }
            setShowFinalScore(true);
            console.log("user:", props.username[0]);
            console.log("finalScore:", score);
            if (sendFetchOnce) {
                sendScoreToDB(props.username[0], score);
                setSendFetchOnce(false);
            }
        }

        if (playing) {
            const timer =
                counter > 0 &&
                setTimeout(() => {
                    setCounter(counter - 1);
                    console.log(counter);
                }, 1000);
        }
    }, [choiceOne, choiceTwo, score, matches, disabled, counter, showFinalScore]);

    function sendScoreToDB(user, score) {
        fetch("http://localhost:3001/api/scores", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3001/api/scores",
            },
            body: JSON.stringify({
                userId: props.userId[0],
                user: user,
                score: score,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "score added to user!");
            })
            .catch((err) => console.log(err));
    }

    //resets card position and starts new turn
    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setMoves(moves + 1);
        setDisabled(false);
    };
    let finalScore;
    if (showFinalScore) {
        finalScore = <h2>Your final score is {score}.</h2>;
    }

    return (
        <div className="board">
            <Button
                onClick={() => {
                    shuffleCards();
                }}
            >
                {playing ? "End Game" : "Start Game"}
            </Button>
            {finalScore}
            {playing && (
                <div>
                    <Col className="d-flex justify-content-center">Time left: {counter}</Col>
                    <Col>
                        <p>Moves Made: {moves}</p>
                    </Col>
                    <Col>
                        <p>Score: {score > 0 ? score : 0}</p>
                    </Col>

                    <div className="card-grid">
                        {cards.map((card) => (
                            <CardTile key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} disabled={disabled} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

import React from "react";
import { Card } from "react-bootstrap";

export default function HighScore(props) {
    return (
        <Card className="p-4"id="highscore">
            <h3 className="text-center">High Score</h3>
            <ul>{props.score}</ul>
        </Card>
    );
}

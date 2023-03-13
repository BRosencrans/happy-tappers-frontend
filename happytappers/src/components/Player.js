import React from "react";

export default function Player(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h4>Score: {props.score}</h4>
        </div>
    );
}

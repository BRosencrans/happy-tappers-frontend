import React from "react";
import Tile from "../Tile";
import "../css/Room.css";

let unassignedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let assignedTiles = [];

export default function Room() {
    return (
        <div id="gameboard">
            {unassignedTiles.map((tile) => {
                return <Tile key={tile} />;
            })}
        </div>
    );
}

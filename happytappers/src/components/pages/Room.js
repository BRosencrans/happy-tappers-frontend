import React from "react";
import Tile from "../Tile";
import "../css/Room.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { io } from "socket.io-client";

let unassignedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let assignedTiles = [];

export default function Room() {
    const socket = io("http://localhost:8080", {});
    const { roomId } = useParams();
    console.log("Room loaded");
    socket.on("connection", () => {
        console.log(`I'm connected with the back-end`);
    });

    useEffect(() => {}, [socket, roomId]);
    console.log(roomId);
    return (
        <div id="gameboard">
            {unassignedTiles.map((tile) => {
                return <Tile key={tile} />;
            })}
        </div>
    );
}

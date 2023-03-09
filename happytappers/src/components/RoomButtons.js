import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("http://localhost:8080")
export default function RoomButtons() {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    let roomInput = React.createRef();
    function handleRoomIdChange(e) {
        setRoomId(roomInput.current.value);
    }

    function joinRoom(e) {
        e.preventDefault();
        console.log(roomId);
        navigate(`/room/${roomId}`);
        socket.emit("join-room", (`${roomId}`)) 
        socket.on("join-msg",(text)=>
        {
            console.log(text)
        })
        // need to add functionality to get room code from form value and shoot it as a param in the redirect
    }

    function createRoom(e) {
        e.preventDefault();
        navigate(`/room/${roomId}`);
        socket.emit("new-room", (`${roomId}`)) 
        socket.on("new-msg",(text)=>
        {
            console.log(text)
        })
        // redirect over to room page since no param, there will need to be a way to check a null param and create a room code from there.
    }

    return (
        <div id="roomButtonsContainer">
            <form onSubmit={joinRoom}>
                <input type="text" minLength="4" name="roomId" id="roomId" placeholder="Enter Room Code" value={roomId} ref={roomInput} onChange={handleRoomIdChange} />
                <button type="submit">Join Room</button>
            </form>
            <NavLink to="/room">
                <button type="button" onClick={createRoom}>
                    Create Room
                </button>
            </NavLink>
        </div>
    );
}

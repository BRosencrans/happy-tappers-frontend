import React, { useState, useContext, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../utils/SocketHelper";
import { Stack, Form, Button } from "react-bootstrap";

export default function RoomButtons() {
    const socket = useContext(SocketContext);
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
        socket.emit("join-room", `${roomId}`);
        socket.on("join-msg", (text) => {
            console.log(text);
        });
        socket.on("wrong-way", (text) => {
            console.log(text);
        });
        // need to add functionality to get room code from form value and shoot it as a param in the redirect
    }

    function createRoom(e) {
        e.preventDefault();
        navigate(`/room/${roomId}`);
        socket.emit("new-room", `${roomId}`);
        socket.on("new-msg", (text) => {
            console.log(text);
        });
        // redirect over to room page since no param, there will need to be a way to check a null param and create a room code from there.
    }

    return (
        <Stack gap={2} className="mx-auto">
            <Form onSubmit={joinRoom} className="col-2" style={{ width: "100%" }}>
                <input
                    className="m-2"
                    style={{ width: "100%" }}
                    type="text"
                    minLength="4"
                    name="roomId"
                    id="roomId"
                    placeholder="Enter Room Code"
                    value={roomId}
                    ref={roomInput}
                    onChange={handleRoomIdChange}
                />
                <br />
                <Button id="btn" type="submit" style={{ width: "100%" }} className="m-2">
                    Join Room
                </Button>
                <br />
                <Button id="btn" type="submit" onClick={createRoom} style={{ width: "100%" }} className="m-2">
                    Create Room
                </Button>
            </Form>
        </Stack>
    );
}

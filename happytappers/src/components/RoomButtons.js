import React, { useState, useContext,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../utils/SocketHelper";
import { Stack, Form, Button } from "react-bootstrap";

export default function RoomButtons(props) {
    const socket = useContext(SocketContext);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
    let roomInput = React.createRef();

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedUserId = localStorage.getItem("id");
        if (savedUsername) {
            setUsername(savedUsername);
        }
        if (savedUserId) {
            setUserId(savedUserId);
        }
    }, []);
    //Gets the room code input from the input tag
    function handleRoomIdChange(e) {
        setRoomId(roomInput.current.value);
    }

    //Create a room
    function createRoom(e) {
        e.preventDefault();
        socket.emit("new-room", `${roomId}`);
        socket.on("room-created", (text) => {
            console.log(text);
        });
        socket.emit("join-room", { roomId, username, userId });
        socket.on("joined-room", (text) => {
            console.log(text);
            navigate(`/room/${roomId}`);
        });
        socket.on("join-room-error", (text) => {
            console.log(text);
            // TODO: add in error message with useState.
        });
        // redirect over to room page since no param, there will need to be a way to check a null param and create a room code from there.
    }

    //Join a room
    function joinRoom(e) {
        e.preventDefault();
        socket.emit("join-room", { roomId, username, userId });
        socket.on("joined-room", (text) => {
            console.log(text);
            navigate(`/room/${roomId}`);
        });
        socket.on("join-room-error", (text) => {
            console.log(text);
            // TODO: add in error message with useState.
        });

        // need to add functionality to get room code from form value and shoot it as a param in the redirect
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

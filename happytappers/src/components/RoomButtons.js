import React, { useState, useContext,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../utils/SocketHelper";
import { Stack, Form, Button } from "react-bootstrap";

export default function RoomButtons(prop) {
    const socket = useContext(SocketContext);
    console.log(prop.username);
    const username = prop.username;
    const userId = prop.userId;
    const [roomId, setRoomId] = useState("");

    const navigate = useNavigate();
    let roomInput = React.createRef();

    useEffect(() => {
        // const savedUsername = localStorage.getItem("username");
        // const savedUserId = localStorage.getItem("id");
        // if (savedUsername) {
        //     setUsername(savedUsername);
        // }
        // if (savedUserId) {
        //     setUserId(savedUserId);
        // }
        socket.on("returned-room-data", (data) => {
            console.log(data);
            if (!data) {
                alert("Bad room id");
            } else {
                socket.emit("join-room", { roomId: data.room.id, username, userId });
                navigate(`/room/${data.room.id}`);
            }
        });
        socket.on("room-created", (text) => {
            console.log(text);
        });
        socket.on("join-room-error", (text) => {
            console.log(text);
            // TODO: add in error message with useState.
        });
        socket.on("joined-room", (text) => {
            console.log(text);
            navigate(`/room/${roomId}`);
        });
        return () => {
            socket.off("joined-room");
            socket.off("room-created");
            socket.off("join-room-error");
            socket.off("returned-room-data");
        };
    }, [socket, username, userId]);
    //Gets the room code input from the input tag
    function handleRoomIdChange(e) {
        setRoomId(roomInput.current.value);
    }

    //Create a room
    function createRoom(e) {
        e.preventDefault();
        socket.emit("new-room", { roomId, username, userId });
        navigate(`/room/${roomId}`);
        // socket.emit("join-room", { roomId, username, userId });
        // redirect over to room page since no param, there will need to be a way to check a null param and create a room code from there.
    }

    //Join a room
    function joinRoom(e) {
        e.preventDefault();
        socket.emit("request-room-data-joinroom", roomId);
        // socket.emit("join-room", { roomId, username, userId });
        // navigate(`/room/${roomId}`);
        // need to add functionality to get room code from form value and shoot it as a param in the redirect
    }

    return (
        // check if room is created/joined
        // if yes, render chat.js
        //if not render this
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

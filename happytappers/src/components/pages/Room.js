import React, { useEffect, useState, useContext } from "react";
import Tile from "../Tile";
import "../css/Room.css";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import MemoryGame from "../MemoryGame";
import Timer from "../Timer";
import Player from "../Player";
import { SocketContext } from "../../utils/SocketHelper";

export default function Room() {
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const { roomId } = useParams();
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const [room, setRoom] = useState({});

    console.log(`Room loaded: ${roomId}`);

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedUserId = localStorage.getItem("id");
        if (savedUsername) {
            setUsername(savedUsername);
        }
        if (savedUserId) {
            setUserId(savedUserId);
        }

        socket.emit("request-room-data", roomId);
        socket.on("returned-room-data", (data) => {
            console.log(room);
            setRoom(data.room);
            setUsers(data.roomUsers);
        });

        socket.on("user-num-changed", (roomUsers) => {
            setUsers(roomUsers);
        });
    }, []);

    useEffect(() => {
        // socket.on("add-user", username);
    }, [roomId]);
    console.log(roomId);

    function leaveRoom(e) {
        e.preventDefault();
        socket.emit("leave-room", { roomId, userId });
        navigate("/dashboard");
    }

    return (
        <Container fluid>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Button onClick={leaveRoom}>Exit</Button>
                </Col>
                <Col className="d-flex justify-content-center">
                    <h2>Room code: {roomId}</h2>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Timer />
                </Col>
            </Row>
            <Row>
                <Col>
                    {users.map((user, index) => (
                        <Player key={"player" + index} name={user.username} score={user.score} />
                    ))}
                </Col>
            </Row>
            <Row>
                <Col>
                    <MemoryGame users={users} />
                </Col>
            </Row>
        </Container>
    );
}

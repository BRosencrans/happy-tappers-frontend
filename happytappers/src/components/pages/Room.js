import React, { useEffect, useState, useContext } from "react";
// import Tile from "../Tile";
import "../css/Room.css";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import MemoryGame from "../MemoryGame";
import Timer from "../Timer";
import Player from "../Player";
import { SocketContext } from "../../utils/SocketHelper";
import Chat from "../Chat";

export default function Room() {
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const { roomId } = useParams();
    const username = useState(localStorage.getItem("username"));
    const userId = useState(localStorage.getItem("id"));
    const [room, setRoom] = useState({});
    const [users, setUsers] = useState([]);
    const [pageLoad, setPageLoad] = useState(false);

    useEffect(() => {
        if (pageLoad == false) {
            socket.emit("request-room-data", roomId);
            setPageLoad(true);
        }
        socket.on("returned-room-data", (data) => {
            setRoom(data.room);
            setUsers(data.room.users);
        });

        socket.on("user-num-changed", (roomUsers) => {
            setUsers(roomUsers);
        });

        return () => {
            socket.off("returned-room-data");
        };
    }, [socket, roomId, users]);

    // useEffect(() => {}, [users]);

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
                {users != null && users.length > 0 ? (
                    users.map((user, index) => (
                        <Col>
                            <Player key={index} name={user.username} score={user.score} />
                        </Col>
                    ))
                ) : (
                    <h3>Loading users....</h3>
                )}
            </Row>
            <Row>
                <Col sm={4}>
                    <Chat />
                </Col>
                <Col>
                    <MemoryGame users={users} />
                </Col>
            </Row>
        </Container>
    );
}

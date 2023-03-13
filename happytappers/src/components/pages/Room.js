import React, { useEffect, useState, useContext } from "react";
import Tile from "../Tile";
import "../css/Room.css";
import { useParams, NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import MemoryGame from "../MemoryGame";
import Timer from "../Timer";
import Player from "../../Player";
import { SocketContext } from "../../utils/SocketHelper";

export default function Room() {
    const socket = useContext(SocketContext);
    const { roomId } = useParams();
    console.log(`Room loaded: ${roomId}`);

    useEffect(() => {}, [roomId]);
    console.log(roomId);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <NavLink to="/dashboard" exact="true">
                        <Button>Exit</Button>
                        <Timer />
                    </NavLink>
                    <Player />
                </Col>
            </Row>
            <Row>
                <Col>
                    <MemoryGame
                    // socket=TODO: Socket importing should go here
                    />
                </Col>
            </Row>
        </Container>
    );
}

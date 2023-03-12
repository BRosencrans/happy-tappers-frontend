import React, { useEffect, useState } from "react";
import Tile from "../Tile";
import "../css/Room.css";
import { useParams, NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import MemoryGame from "../MemoryGame";

export default function Room() {
    const { roomId } = useParams();
    console.log("Room loaded");

    useEffect(() => {}, [roomId]);
    console.log(roomId);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <NavLink to="/dashboard" exact="true">
                        <Button>Exit</Button>
                    </NavLink>
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

import React, { useEffect } from "react";
import Tile from "../Tile";
import "../css/Room.css";
import { useParams, NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

let unassignedTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// let assignedTiles = [];

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
                    <div id="gameboard">
                        {unassignedTiles.map((tile) => {
                            return <Tile key={tile} />;
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

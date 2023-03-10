import React from "react";
import RoomButtons from "../RoomButtons";
import HighScore from "../HighScore";
import LogoutButton from "../LogoutButton";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
    return (
        <Container fluid>
            <Row className="mb-5">
                <Col>
                    <NavLink to="/profile/:userId">
                        {/* TODO: change to userId */}
                        <Button variant="primary" size="lg">
                            Profile
                        </Button>
                    </NavLink>
                </Col>
                <Col className="d-flex justify-content-end">
                    <LogoutButton />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2}>
                    <RoomButtons />
                </Col>
                <Col className="text-center" xs={6} md={5}>
                    <HighScore />
                </Col>
                <Col xs={6} md={5}>
                    {/* Leaderboard */}
                </Col>
            </Row>
        </Container>
    );
}

import React, { useState, useEffect } from "react";
import RoomButtons from "../RoomButtons";
import HighScore from "../HighScore";
import LogoutButton from "../LogoutButton";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Leaderboard from "../Leaderboard";
import "../css/Dashboard.css";

export default function Dashboard() {
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        const savedUserId = localStorage.getItem("id");
        if (savedUsername) {
            setUsername(savedUsername);
        }
        if (savedUserId) {
            setUserId(savedUserId);
        }
    }, [username, userId]);

    return (
        <Container fluid>
            <Row className="mb-5">
                <Col>
                    <NavLink to={`/profile/${userId}`}>
                        {/* TODO: change to userId */}
                        <Button variant="primary" size="lg" id="btn">
                            Profile
                        </Button>
                    </NavLink>
                </Col>
                <Col className="d-flex justify-content-center">
                    <h2>Welcome, {username}!</h2>
                </Col>
                <Col className="d-flex justify-content-end">
                    <LogoutButton />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={2}>
                    <RoomButtons username={username} userId={userId} />
                </Col>
                <Col className="text-center" xs={6} md={5}>
                    <HighScore />
                </Col>
                <Col xs={6} md={5}>
                    <Leaderboard />
                </Col>
            </Row>
        </Container>
    );
}

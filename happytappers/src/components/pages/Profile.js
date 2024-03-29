import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
//import ProgressBar from "react-bootstrap/ProgressBar";
import RoomButtons from "../RoomButtons";
import HighScore from "../HighScore";
import LogoutButton from "../LogoutButton";
import Cookie from "../Cookie";

export default function Profile() {
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
                    <NavLink to="/dashboard" exact="true">
                        <Button id="btn" variant="primary" size="lg">
                            Back
                        </Button>
                    </NavLink>
                </Col>
                <Col className="d-flex justify-content-center">
                    <h2>{username}</h2>
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
                <Col className="text-center" xs={6} md={5}>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img id="penguin" alt="penguin" src={require("../../images/bird1.png")} style={{ width: 250, height: 250 }}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id="penguin" alt="parrot" src={require("../../images/bird2.png")} style={{ width: 250, height: 250 }}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id="penguin" alt="chick" src={require("../../images/bird3.png")} style={{ width: 250, height: 250 }}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img id="penguin" alt="parrot 2" src={require("../../images/bird4.png")} style={{ width: 250, height: 250 }}></img>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

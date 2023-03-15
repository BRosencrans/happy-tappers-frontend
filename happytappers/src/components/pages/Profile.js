import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
//import ProgressBar from "react-bootstrap/ProgressBar";
import RoomButtons from "../RoomButtons";
import HighScore from "../HighScore";
import LogoutButton from "../LogoutButton";
import Cookie from "../Cookie";
import ControlledCarousel from "../Carousel"

export default function Profile() {
    return (
        <Container fluid>
            <Row className="mb-5">
                <Col>
                    <NavLink to="/dashboard" exact="true">
                        <Button id="btn"variant="primary" size="lg">
                            Back
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
                <Col className="text-center" xs={6} md={5}>
                    <ControlledCarousel/>
                   <Cookie />
                </Col>
            </Row>
        </Container>
    );
}

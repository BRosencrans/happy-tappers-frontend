import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Leaderboard from "../Leaderboard";
import "../css/Home.css";

export default function Home() {
    return (
        <Container fluid="md" className="p-5">
            <Row>
                <Col className="text-center">
                    <div className="mb-2">
                        <NavLink to="/login" exact="true">
                            <Button variant="" className="bts" size="lg" style={{ width: "70%" }}>
                                Login
                            </Button>
                        </NavLink>
                    </div>
                </Col>
                <Col className="text-center">
                    <div className="mb-2">
                        <NavLink to="/signup" exact="true">
                            <Button variant="" className="bts" size="lg" style={{ width: "70%" }}>
                                Signup
                            </Button>
                        </NavLink>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="leader">
                    <Leaderboard />
                </Col>
            </Row>
        </Container>
    );
}

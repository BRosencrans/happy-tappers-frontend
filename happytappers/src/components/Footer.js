import React from "react";
import "./css/Footer.css";
import { Container, Row, Col } from "react-bootstrap/";

export default function Footer() {
    return (
        <Container fluid="md" id="footer">
            <Row xs={1} sm={2} md={4}>
                <Col className="text-center">
                    <a href="https://github.com/BRosencrans" target={"_blank"} rel="noreferrer" className="gitLinks">
                        Brandon Rosencrans
                    </a>
                </Col>
                <Col className="text-center">
                    <a href="https://github.com/claricetran" target={"_blank"} rel="noreferrer" className="gitLinks">
                        Clarice Tran
                    </a>
                </Col>
                <Col className="text-center">
                    <a href="https://github.com/byaylin" target={"_blank"} rel="noreferrer" className="gitLinks">
                        Aylin Morales
                    </a>
                </Col>
                <Col className="text-center">
                    <a href="https://github.com/fgeorge206" target={"_blank"} rel="noreferrer" className="gitLinks">
                        Febin George
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

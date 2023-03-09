import React from "react";
import { NavLink } from "react-router-dom";
import RoomButtons from "../RoomButtons";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Profile() {
    return (
        <Container fluid className="vh-100">
                <h1 className="p-4 m-5 text-center">Happy Tappers</h1>
                <NavLink to="/">
                    <Button variant="primary" className="m-3">Home</Button>
                </NavLink>
            <RoomButtons/>
            <Row>
            <Col>
            <Form.Floating>
                <Form.Control id="floatingInputCustom" type="text" placeholder="Enter Room Code" className="mb-3"></Form.Control>
            </Form.Floating>
            <Button variant="primary" type="submit" className="mb-3">Join Room</Button>
            <Button variant="primary" type="submit" className="mb-3">New Room</Button>
            </Col>
            <Col xs={6} className="text-center">High Score</Col>
            <Col>
            {/*Insert avatar */}
            </Col>
            </Row>
           
        
        </Container>
    );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import AvatarEditor from "react-avatar-editor";
import RoomButtons from "../RoomButtons";
import HighScore from "../HighScore";
import LogoutButton from "../LogoutButton";

export default function Profile() {
    return (
        <Container fluid>
            <Row className="mb-5">
                <Col>
                    <NavLink to="/dashboard" exact="true">
                        <Button variant="primary" size="lg">
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
                    {/*<AvatarEditor
                    image={''}
                    width={150}
                    height={150}>
    </AvatarEditor>*/}
                </Col>
            </Row>
        </Container>
    );
}

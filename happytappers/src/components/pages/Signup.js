import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import HomeButton from "../HomeButton";

export default function Signup() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <HomeButton />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="username"></Form.Control>
                            <label htmlFor="floatingInputCustom">Username</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password" />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password" />
                            <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                        </Form.Floating>

                        <Button variant="primary" type="submit" size="lg" style={{ width: "100%" }}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

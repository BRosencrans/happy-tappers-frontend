import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap/";
import HomeButton from "../HomeButton";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(username);
        fetch("hhttps://happytappersbackend.herokuapp.com/api/users/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "https://happytappersbackend.herokuapp.com",
            },

            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.token) {
                    alert("login successful");
                    window.localStorage.setItem("token", data.token);
                    localStorage.setItem("username", data.user.username);
                    localStorage.setItem("id", data.user._id);
                    window.location.href = "./dashboard";
                }
            });
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <HomeButton />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
                            <label htmlFor="floatingInputCustom">Username</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label id="pw" htmlFor="floatingPasswordCustom">
                                Password
                            </label>
                        </Form.Floating>
                        <Button id="btn" variant="primary" type="submit" size="lg" style={{ width: "100%" }}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

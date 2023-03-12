import React, {  useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap/";
import HomeButton from "../HomeButton";

export default  function Login() {  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
  
      console.log(username);
      fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3001/api/users"
        },

        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "logged in");
          if (data.username) {
            alert("login successful");
            window.localStorage.setItem("token", data);
           
  
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
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                        <Button variant="primary" type="submit" size="lg" style={{ width: "100%" }}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
    }


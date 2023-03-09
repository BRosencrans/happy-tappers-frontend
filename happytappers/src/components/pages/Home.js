import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

 
socket.on("newGame", (room) => {
    console.log(room); 
  });
export default function Home() {
    return (
        <Container fluid className="vh-100">
            <h1 className="p-4 m-5 text-center">Happy Tappers</h1>
            <Row>
                <br />
                <Col className="text-center">
                    <Card className="p-4 m-5">
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                Login
                            </Button>{" "}
                        </div>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card className="p-4 m-5">
                        <div className="mb-2">
                            <Button variant="primary" size="lg">
                                Signup
                            </Button>{" "}
                        </div>
                    </Card>
                </Col>
            </Row>
            <br />
            <Card className="p-4 m-5">
                <h3 className="text-center">High Score</h3>
            </Card>
        </Container>
    );
}

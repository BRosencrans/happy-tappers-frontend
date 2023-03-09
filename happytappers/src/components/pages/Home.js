import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import io  from "socket.io-client";
const socket = io.connect("http://localhost:8080", );
const newGame = () =>{
    socket.on("newGame", (room) => {
        console.log(room); 
      });

}
socket.on("connect", () => {
    console.log(`I'm connected with the back-end`);
  
});


 
socket.on("newGame", (room) => {
    console.log(room); 
  });
export default function Home() {
    return (
        <Container fluid className="vh-100">
                    <h1 className='p-4 m-5 text-center'>Happy Tappers</h1>
      <Row>
        <br/>
        <Col className='text-center'>
          <Card className='p-4 m-5'>
          <div className="mb-2">
                <Button variant="primary" size="lg">
                    Login
                </Button>{' '}
            </div>
          </Card>
        </Col>
        <Col className='text-center'>
          <Card className='p-4 m-5'>
            <div className="mb-2">
                <Button variant="primary" size="lg">
                    Signup
                </Button>{' '}
            </div>
        </Card>
        </Col>
      </Row>
      <br/>
      <Card className='p-4 m-5'>
        <h3 className='text-center'>High Score</h3>
      </Card>
            <form>
                <input type="text" minlength="4" />
                <NavLink to="/room">
                    <button>Join Room</button>
                </NavLink>
            </form>
            <NavLink to="/room">
                <button onClick= {newGame}>Create Room</button>
            </NavLink>
        </Container>
    );
}
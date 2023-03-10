import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Home() {
    return (
        <Container fluid className="vh-100">
                    <h1 className='text-center'>Happy Tappers</h1>
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
                <input type="text" minLength="4" />
                <NavLink to="/room">
                    <button>Join Room</button>
                </NavLink>
            </form>
            <NavLink to="/room">
                <button>Create Room</button>
            </NavLink>
        </Container>
    );
}
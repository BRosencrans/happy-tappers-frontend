import React from 'react'
import "./css/Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer () {
  return (
    <Container fluid="md">
      <Row>
        <Col className='text-center gitLinks'>
            <a href='https://github.com/BRosencrans' target={"_blank"}>Brandon Rosencrans</a>
        </Col>
        <Col className='text-center gitLinks'>
            <a href='https://github.com/claricetran' target={"_blank"}>Clarice Tran</a>
        </Col>
        <Col className='text-center gitLinks'>
            <a href='https://github.com/byaylin' target={"_blank"}>Aylin Morales</a>
        </Col>
        <Col className='text-center gitLinks'>
            <a href='https://github.com/fgeorge206' target={"_blank"}>Febin George</a>
        </Col>
      </Row>
    </Container>
  );
}

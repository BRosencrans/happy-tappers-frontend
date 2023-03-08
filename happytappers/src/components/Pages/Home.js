import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export const Home = () => {
  return (
    <Container className=''>
        <h1 className='p-4 m-5 text-center'>Happy Tappers</h1>
      <Row>
        <br/>
        <Col className='text-center'>
          <Card className='p-4 m-5'>Login</Card>
        </Col>
        <Col className='text-center'>
          <Card className='p-4 m-5'>Sign up</Card>
        </Col>
      </Row>
      <br/>
      <Card className='p-4 m-5'>
        <h3 className='text-center'>High Score</h3>
      </Card>
    </Container>
  )
}

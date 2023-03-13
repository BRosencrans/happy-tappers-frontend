import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import HomeButton from "../HomeButton";

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const{username, password} = this.state;
        console.log(username)
        
fetch("http://localhost:3001/api/users/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001/"
    },
    body:JSON.stringify({
        username,
        password
    }),
}).then ((res)=>res.json())
.then((data)=>{
    console.log (data, "registered successfully")
})
    }
render(){
    return (
        <Container fluid>
            <Row>
                <Col>
                    <HomeButton />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="4">
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingInputCustom" type="text" placeholder="username" onChange={e=>this.setState({username: e.target.value})}></Form.Control>
                            <label htmlFor="floatingInputCustom">Username</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password"/>
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>

                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="password" placeholder="password" onChange={e=>this.setState({ password: e.target.value})}/>
                            <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                        </Form.Floating>

                        <Button id="btn" variant="primary" type="submit" size="lg" style={{ width: "100%" }}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );}
}

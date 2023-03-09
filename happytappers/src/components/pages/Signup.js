import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Signup(){
    return(
        <Container fluid className="vh-100">
                    <h1 className="p-4 m-5 text-center">Happy Tappers</h1>
                <NavLink to="/">
                    <Button variant="primary" className="mb-3">Home </Button>
                </NavLink>
            <Form.Floating className="mb-3">
                <Form.Control id="floatingInputCustom" type="text" placeholder="username"></Form.Control>
                <label htmlFor="floatingInputCustom">Username</label>
           </Form.Floating>

            <Form.Floating>
                <Form.Control id="floatingPasswordCustom" className="mb-3" type="password" placeholder="password"/>
                    <label htmlFor="floatingPasswordCustom">Password</label>
             </Form.Floating>

            <Form.Floating>
                <Form.Control id="floatingPasswordCustom" className="mb-3" type="password" placeholder="password"/>
                <label htmlFor="floatingPasswordCustom">Confirm Password</label>
    </Form.Floating>
        </Container>
    )
}

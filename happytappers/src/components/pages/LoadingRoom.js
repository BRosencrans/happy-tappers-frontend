import React from "react";
import loading from "../../assets/images/icons8-rhombus-loader.gif";
import { Container } from "react-bootstrap";

export default function LoadingRoom() {
    return (
        <Container fluid="md" className="p-5">
            <img src={loading} alt="loading" />
        </Container>
    );
}

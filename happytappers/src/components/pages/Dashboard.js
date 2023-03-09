import React from "react";
import Container from "react-bootstrap/Container";
import RoomButtons from "../RoomButtons";

export default function Dashboard() {
    return (
        <Container fluid className="vh-100">
            <RoomButtons />
        </Container>
    );
}

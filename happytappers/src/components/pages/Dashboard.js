import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Dashboard() {
    return (
        <Container fluid className="vh-100">
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

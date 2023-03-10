import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function HomeButton() {
    return (
        <NavLink to="/">
            <Button variant="primary" className="mb-3">
                Home
            </Button>
        </NavLink>
    );
}

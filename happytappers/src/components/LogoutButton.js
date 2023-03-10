import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LogoutButton() {
    return (
        <NavLink to="/">
            {/* TODO: make logout functionality work */}
            <Button variant="primary" size="lg">
                Logout
            </Button>
        </NavLink>
    );
}

import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function LogoutButton() {
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./";
      };
    return (
        <NavLink to="/">
            {/* TODO: make logout functionality work */}
            <Button onClick={logOut} variant="primary" size="lg">
                Logout
            </Button>
        </NavLink>
    );
}

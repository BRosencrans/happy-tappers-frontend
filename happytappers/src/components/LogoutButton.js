import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { SocketContext } from "../utils/SocketHelper";

export default function LogoutButton() {
    const socket = useContext(SocketContext);
    const logout = () => {
        window.localStorage.clear();
        window.location.href = "../";
        socket.disconnect();
    };
    return (
        <NavLink to="/">
            {/* TODO: make logout functionality work */}
            <Button onClick={logout} variant="primary" size="lg" id="btn">
                Logout
            </Button>
        </NavLink>
    );
}

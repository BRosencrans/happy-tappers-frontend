import React from "react";
import { NavLink } from "react-router-dom";
import RoomButtons from "../RoomButtons";

export default function Profile() {
    return (
        <div>
            <header>
                <h1>Happy Tappers</h1>
                <NavLink to="/">
                    <button>Home </button>
                </NavLink>
            </header>
            <RoomButtons />
        </div>
    );
}

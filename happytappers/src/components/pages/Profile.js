import React from "react";
import { NavLink } from "react-router-dom";

export default function Profile(){
    return(
        <div>
        <header>
            <h1>Happy Tappers</h1>
            <NavLink to="/">
                <button>Home </button>
            </NavLink>
        </header>
        <input type="text" placeholder="enter room code" minLength="4"></input>
        <button>Join Room</button>
        <button>New Room</button>
    </div>
    )
}
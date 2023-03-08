import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <form>
                <input type="text" minlength="4" />
                <NavLink to="/room">
                    <button>Join Room</button>
                </NavLink>
            </form>
            <NavLink to="/room">
                <button>Create Room</button>
            </NavLink>
        </div>
    );
}

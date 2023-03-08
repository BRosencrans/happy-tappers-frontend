import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { io } from "socket.io-client";

function Home() {
    const socket = io("http://localhost:8080", {});
    socket.on("connection", () => {
        console.log(`I'm connected with the back-end`);
    });

    return (
        <div>
            <form>
                <input type="text" minLength="4" />
                <NavLink to="/room/:roomId">
                    <button>Join Room</button>
                </NavLink>
            </form>
            <NavLink to="/room/:roomId">
                <button>Create Room</button>
            </NavLink>
        </div>
    );
}

export default Home;

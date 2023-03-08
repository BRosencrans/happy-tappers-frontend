import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Room from "./components/pages/Room";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";

import { io } from "socket.io-client";

function App() {
    const socket = io("http://localhost:8080", {});
    socket.on("connection", () => {
        console.log(`I'm connected with the back-end`);
    });
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes for pages initiated. Needed room page to see how the tiles should look and to work on game logic. */}
                <Route path="/" element={<Home />} />
                {/* 
                <Route path="/signup" element={<Dashboard />} />
                */}
                <Route path="/room" element={<Room />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:userId" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

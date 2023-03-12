import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SocketContext, socket } from "./utils/SocketHelper.js";
import Home from "./components/pages/Home";
import Room from "./components/pages/Room";
import LoadingRoom from "./components/pages/LoadingRoom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    socket.on("connect", () => {
        console.log(`I'm connected with the back-end and this is your socket.id ${socket.id}`);
    });
    return (
        <SocketContext.Provider value={socket}>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* Routes for pages initiated. Needed room page to see how the tiles should look and to work on game logic. */}
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/room/" element={<LoadingRoom />} />
                    <Route path="/room/:roomId" element={<Room />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                </Routes>
                <div style={{ flexGrow: "1" }}></div>
                <Footer />
            </BrowserRouter>
        </SocketContext.Provider>
    );
}

export default App;

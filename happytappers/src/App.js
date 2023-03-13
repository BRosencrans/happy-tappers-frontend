import "./App.css";
import React, { useState, useEffect } from "react";

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
// import API from "./utils/API";

function App() {
    // const [token, setToken] = useState("");
    // const [username, setUsername] = useState("");
    // const [userId, setUserId] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState("false");

    socket.on("connect", () => {
        console.log(`I'm connected with the back-end and this is your socket.id ${socket.id}`);
    });

    // useEffect(() => {
    //     const savedToken = localStorage.getItem("token");
    //     console.log(savedToken);
    //     if (savedToken) {
    //         API.isValidToken(savedToken).then((tokenData) => {
    //             if (tokenData.isValid) {
    //                 setToken(savedToken);
    //                 setUserId(tokenData.user.id);
    //                 setUsername(tokenData.username);
    //                 setIsLoggedIn(true);
    //             } else {
    //                 localStorage.removeItem("token");
    //             }
    //         });
    //     }
    // }, []);

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

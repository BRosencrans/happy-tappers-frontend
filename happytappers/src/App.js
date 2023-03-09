import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import Home from "./components/pages/Home";
import Room from "./components/pages/Room";
import LoadingRoom from "./components/pages/LoadingRoom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Dashboard from "./components/pages/Dashboard";
import Footer from "./components/footer";

function App() {
    const socket = io("http://localhost:8080");
    socket.on("connect", () => {
        console.log(`I'm connected with the back-end`);
    
    });
    return (
        <BrowserRouter>
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
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

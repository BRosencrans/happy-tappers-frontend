import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Room from "./components/pages/Room";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Routes for pages initiated. Needed room page to see how the tiles should look and to work on game logic. */}
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signup" element={<Dashboard />} />
                <Route path="/profile/:userId" element={<Profile/>}/> */}
                <Route path="/room/:roomId" element={<Room />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

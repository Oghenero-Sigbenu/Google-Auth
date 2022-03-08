import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/profile";
import Home from "../pages/main";

function AppRoutes() {
    const isLoggedIn  = sessionStorage.getItem('isLoggedIn'); // determine if authorized
console.log(isLoggedIn)
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
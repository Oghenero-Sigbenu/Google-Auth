import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect } from "react"

function Navbar() {
  const isLoggedIn  = sessionStorage.getItem('isLoggedIn'); // determine if authorized
  const [loggedIn, setActive] = useState(isLoggedIn)
  const [refresh, setRefresh] = useState(isLoggedIn)
  const navigate = useNavigate();

  const clientId = "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

  const onSuccess = () => {
    setActive(!loggedIn)
    sessionStorage.clear();
    navigate("/login")
  };
  
  useEffect(() => {
  setRefresh()
  }, []);
  return (
    <div className="nav">
     <NavLink to="/" className="logo">TASK</NavLink> 
     <div className="left-nav">
     <NavLink to="/profile">Profile</NavLink> 
     {loggedIn && loggedIn ?
     <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onSuccess}
      ></GoogleLogout>
      : 
     <NavLink to="/login">Login</NavLink> 
      } 
     </div>

    </div>
  );
}

export default Navbar;

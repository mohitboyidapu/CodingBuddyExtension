import React from "react";
import Constants from "./../Constants/constants.js";
import "./../Util/GlobalStyles.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h1>{Constants.NAME}</h1>
      
      <button className="close-button-nav" onClick={handleNavigation}>
        x
      </button>
    </div>
  );
};

export default Navbar;

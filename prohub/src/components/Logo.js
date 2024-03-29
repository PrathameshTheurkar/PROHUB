import React from "react";
import logo from "../assets/pro-hub_logo.png";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={logo} alt="logo" className="logo" />
      <div className="logo-name">/ PRO-HUB</div>
    </div>
  );
};

export default Logo;

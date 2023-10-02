import React from "react";
import "../styles/Footer.css";
import logo from "../assets/pro-hub_logo.png";
import insta from "../assets/insta-logo.png";
import discord from "../assets/discord.jpg";
import twitter from "../assets/twitter-logo.jpg";
import linkedin from "../assets/linkedin-logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-mid">
        <div className="logo-name">/ PRO-HUB</div>

        <hr className="hr2"></hr>

        <div className="links">
          <img className="logo-insta" src={insta} alt="insta" />
          <img className="logo-discord" src={discord} alt="discord" />
          <img className="logo-twitter" src={twitter} alt="twitter" />
          <img className="logo-linkedin" src={linkedin} alt="linkedin" />
        </div>

        <div className="copyright">
          <span>copyright &#169; | All rights reserved. </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "../styles/Login.css";
import github_logo from "../assets/GitHub-Mark.png";
import { OAuthGithub } from "../appwite_assets/User";

const Login = () => {
  return (
    <div className="LoginButt">
      <button id="login_button" onClick={OAuthGithub}>
        <img src={github_logo} alt="github_logo" />
        <div id="login2">LOGIN</div>
      </button>
    </div>
  );
};

export default Login;

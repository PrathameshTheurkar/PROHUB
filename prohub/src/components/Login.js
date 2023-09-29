import React, { useContext } from "react";
import "../styles/Login.css";
import github_logo from "../assets/GitHub-Mark.png";
import { OAuthGithub } from "../appwite_assets/User";
import { Session } from "../App";

const Login = () => {
  const sessionDetails = useContext(Session);
  let styles;
  if (sessionDetails !== null) {
    styles = { opacity: 0 };
  } else {
    styles = {};
  }
  return (
    <div className="LoginButt" style={styles}>
      <div id="login_button" onClick={OAuthGithub}>
        <img src={github_logo} alt="github_logo" />
        <div id="login2">LOGIN</div>
      </div>
    </div>
  );
};

export default Login;

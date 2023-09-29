import React from 'react'
import 'C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/styles/Login.css'
import github_logo from "C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/assets/GitHub-Mark.png"
const Login = () =>{
    return (
        <div className = "LoginButt">
             <button id="login_button" >
                <img src={github_logo} alt="github_logo" />
             <div id="login2">LOGIN</div>
             </button>
        </div>
    );
}

export default  Login;
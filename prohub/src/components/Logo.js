import React from 'react'
import logo from 'C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/assets/pro-hub_logo.png'
import 'C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/styles/Logo.css'
const Logo = () =>{
    return (
        <div className = "Logo">
        <img src = {logo} alt="logo" className = "logo"/>
        <span className = "logo-name">/PRO-HUB</span>
        </div>
    );
}

export default  Logo;
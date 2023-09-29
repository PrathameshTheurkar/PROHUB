import React from 'react'
import "C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/styles/Navbar.css"
import Logo from "./Logo.js"
import Login from "./Login.js"
import SearchBar from "./SearchBar.js"
const Navbar = (props) =>{
    return(
        <div className= "Nav">
           <Logo/>
           <SearchBar/>
           <Login/>
        </div>
    );
}

export default Navbar;
import React from "react";
import "../styles/Navbar.css";
import Logo from "./Logo.js";
import Login from "./Login.js";
import SearchBar from "./SearchBar.js";

const Navbar = (props) => {
  return (
    <div className="Nav">
      <Logo />
      <SearchBar />
      <Login handleOpenModal={props.handleOpenModal} />
    </div>
  );
};

export default Navbar;

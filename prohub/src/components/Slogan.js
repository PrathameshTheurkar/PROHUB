import React from "react";
import "C:/Users/PRATHAMESH THEURKAR/OneDrive/Desktop/PROHUB/prohub/src/styles/Slogan.css";
// import logo from '../assets/pro-hub_logo.png'

const Slogan = () => {
  return (
    <div className="Slogan">
      <div className="Slogan-mid">
        <div className="Slogan1">
          <h1>Student Code</h1>
        </div>
        <div className="Slogan2">
          <h1>INNOVATION HUB</h1>
        </div>
        <div className="Slogan3">
          “ CODE | COLLABORATE | INNOVATE | TRIUMPH “
        </div>
        <div className="Description">
          <p>
            A platform for Tech enthusiasts to work, explore and collaborate
            with wizards from multiple domains and ultimately brush an
            astonishing touch to their innovation{" "}
          </p>
          <p className="Slogan4">“ WHERE TALENT MEETS OPPORTUNITY “</p>
        </div>
        <div className="Explore">
          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default Slogan;

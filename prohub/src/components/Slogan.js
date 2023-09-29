import React from "react";

import "../styles/Slogan.css";

const Slogan = () => {
  return (
    <>
      <div className="Slogan">
        <div className="Slogan-mid">
          <div className="Slogan1">
            <h1>Student Code</h1>
          </div>
          <div className="Slogan2">
            <h1>INNOVATION HUB</h1>
          </div>
          <div className="Slogan3">
            " CODE | COLLABORATE | INNOVATE | TRIUMPH "
          </div>
          <div className="Description">
            <p>
              A platform for Tech enthusiasts to work, explore and collaborate
              with wizards from multiple domains and ultimately brush an
              astonishing touch to their innovation
            </p>
            <p className="Slogan4">" WHERE TALENT MEETS OPPORTUNITY "</p>
          </div>
          <div className="Explore">
            <button
              className="explore-btn"
              onClick={() => {
                window.location.href = "#explore";
              }}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slogan;

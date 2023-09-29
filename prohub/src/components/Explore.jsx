import React from "react";

function Explore() {
  return (
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
  );
}

export default Explore;

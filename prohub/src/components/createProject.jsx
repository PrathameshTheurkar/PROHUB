import React from "react";

async function createProject(props) {
  return (
    <div className="Explore">
      <button className="explore-btn" onClick={props.handleOpenModal}>
        Create Project
      </button>
    </div>
  );
}

export default createProject;

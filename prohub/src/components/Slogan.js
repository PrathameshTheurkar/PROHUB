import React, { useContext } from "react";
import "../styles/Slogan.css";
import Explore from "./Explore";
import CreateProject from "./createProject";
import { Session } from "../App";

const Slogan = (props) => {
  const sessionDetails = useContext(Session);
  let current;

  if (sessionDetails !== null) {
    current = <CreateProject handleOpenModal={props.handleOpenModal} />;
  } else {
    current = <Explore />;
  }

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
        </div>
      </div>
      {current}
    </>
  );
};

export default Slogan;

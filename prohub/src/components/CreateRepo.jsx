import React from "react";
import "./../styles/CreateRepo.css";

const CreateRepo = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? "createRepo display-block"
    : "createRepo display-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="close--btn" onClick={handleClose}>
          <svg
            width="72px"
            height="72px"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M3 21.32L21 3.32001"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M3 3.32001L21 21.32"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <h2 className="createRepo-head">Create Repository</h2>
        <div className="mid">
          <div className="Owner">
            <div className="Owner-head">Owner :</div>
            <input className="Owner-name" placeholder="Prathamesh"></input>
          </div>
          <span className="separate">/</span>
          <div className="repo-name">
            {" "}
            <span className="name">Repo Name : </span>{" "}
            <input type="text" className="text-box"></input>{" "}
          </div>
        </div>

        <div className="createBtn">
          <button className="btn">Create Repository</button>
        </div>
      </div>
    </>
  );
};

export default CreateRepo;

import React from "react";
import "../styles/cards.css";
import Tags from "./Tags";

const Cards = () => {
  return (
    <div className="card">
      <div className="card--head">CHAT APP</div>
      <div className="card--des">
        Lorem ipsum dolor sit amet consectetur. Ullamcorper gravida faucibus
        mauris fringilla enim tellus iaculis. Aliquet gravida pulvinar lectus
        vestibulum feugiat mi. Feugiat in quis id lorem tempor et bibendum.
        Aliquet dui posuere egestas et volutpat non nulla. Amet nec mattis
        sit....
      </div>
      <div className="card--update">Last Date: 22 Oct 2023</div>
      <div className="tag-holder">
        <Tags title="HTML" />
        <Tags title="JAVASCRIPT" />
        <Tags title="REACT" />
        <Tags title="COMP" />
      </div>
    </div>
  );
};

export default Cards;

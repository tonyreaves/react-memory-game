import React from "react";
import "./card.css";

const pugCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content" />
  </div>
);

export default pugCard;

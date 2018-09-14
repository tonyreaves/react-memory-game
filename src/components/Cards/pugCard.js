import React from "react";
import "./pugCard.css";

const pugCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content" />
  </div>
);

export default pugCard;

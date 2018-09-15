import React from "react";
import "./pugCard.css";
import "../../pugs.json";

const PugCard = props => (
  <div className="card">
    <div onClick={() => props.setClicked(props.id)} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content" />
  </div>
);

export default PugCard;

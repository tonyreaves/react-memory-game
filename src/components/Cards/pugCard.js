import React from "react";
import "./pugCard.css";

const PugCard = props => (
  <div className="card" onClick={() => props.clicked(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PugCard;

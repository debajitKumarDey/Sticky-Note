import React from "react";
import "./App.css";

const StickyCard = ({id, title, description, onDelete}) => {
  return (
    <div>
      <div className="container">
        <div className="content" id={`card-${id}`}>
          <h4 >{title}</h4>
          <p>{description}</p>
        </div>
        <div>
          <button className="delete" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StickyCard;

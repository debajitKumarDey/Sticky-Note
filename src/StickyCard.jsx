import React from "react";
import "./App.css";

const StickyCard = (props) => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <h5>{props.id}</h5>
          <h4 >{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default StickyCard;

import React from "react";
import "./App.css";

const StickyCard = ({ title, details, onDelete }) => {
  return (
    <div className="note-card">
      <div className="note-content">
        <h4 className="note-title">{title}</h4>
        <p className="note-details">{details}</p>
      </div>
      <button className="note-delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default StickyCard;
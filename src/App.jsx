import React, { useState } from "react";
import "./App.css";
import StickyCard from "./StickyCard";

const App = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const createHandler = (event) => {
    event.preventDefault();
    setError("");
    const newCard = {
      id: Date.now(),
      title,
      description,
    };
    setCards([...cards, newCard]);
    setTitle("");
    setDescription("");
  };
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <div>
      <div className="board">
        <div className="info">
          <h2 className="heading">Sticky Notes</h2>
          <input
            className="title"
            type="text"
            placeholder="Enter Topic Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="textarea"
            name="stickyinfo"
            id="stickyinfo"
            rows="5"
            cols="36"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button className="submit" onClick={createHandler}>
            Submit
          </button>
        </div>
        <div className="card">
          {cards.map((card) => (
            <StickyCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              onDelete={() => deleteCard(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

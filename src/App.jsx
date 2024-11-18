import React, { useState } from "react";
import "./App.css";
import StickyCard from "./StickyCard";

const App = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [card, setCard] = useState([]);
  const [error, setError]= useState('')
  
  const createHandler =(event)=>{
    event.preventDefault();
    setError('')

  }
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
            onChange={(e)=>{setTitle(e.target.value)}}
          />
          <textarea
            className="textarea"
            name="stickyinfo"
            id="stickyinfo"
            rows="5"
            cols="36"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
          ></textarea>
          <button className="submit"  onClick={createHandler}>Submit</button>
        </div>
        <div className="card">
          <StickyCard id={id} title={title} description={description} />
        </div>
      </div>
    </div>
  );
};

export default App;

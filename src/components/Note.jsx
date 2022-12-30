import React from "react";
import trash from './icons/delete.png'

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <img src={trash} alt="delete icon" className="icons"/>
      
      </button>
    </div>
  );
}

export default Note;

import React from 'react';
import '../App.css';

export default function FirstPage(props) {
  return (
    <div className="firstPageContainer">
      <h2 className="header">Quizzical</h2>
      <p className="description">Some description if needed</p>
      <button className="startButton" onClick={props.func}>
        Start Quiz
      </button>
    </div>
  );
}

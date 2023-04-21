import React from 'react';
import './Boxespage.css';

function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>      
    </div>
  );
}

export default Box;

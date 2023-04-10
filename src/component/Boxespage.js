import React from 'react';
import './Boxespage.css';

function Boxespage() {
  return (
    <div className="container">
      <div className="box red">
        <h1>Environments</h1>
        <h2>3</h2>
      </div>
      <div className="box orange">
        <h1>Servers</h1>
        <h2>5</h2>
      </div>
      <div className="box yellow">
        Applications<br></br>
        10
      </div>
      <div className="box green">
        front End Applications
      </div>
      <div className="box blue">
        Backend Applications
      </div>
      <div className="box purple">Team Details-- not needed but just kept
      here we can have all the genaric urls and onbaording kit details
      </div>
    </div>
  );
}

export default Boxespage;

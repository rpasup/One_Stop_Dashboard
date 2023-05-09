import React from "react";
import "./WorkInProgress.css";
import image from "../Workinprogress.jpg";

function WorkInProgress() {
  return (
    <div className="work-in-progress-container">
      {/* <h1 className="wip-text">Work in Progress</h1> */}
      <img src={image} alt="Work in Progress" className="wip-image" />
      
    </div>
  );
}

export default WorkInProgress;

import React from "react";
import './index.css'
const Loading = () => {
  return (
    <div className="loading-card">
    <div className="loading-container">
    
      <h1 className="loading-heading">Weather Info</h1>
      <p className="loading-text">By Ajnas N B</p>
      <div className="loading-animation">
        <div className="rect-1"></div>
        <div className="rect-2"></div>
        <div className="rect-3"></div>
        <div className="rect-4"></div>
        <div className="rect-5"></div>
        <div className="rect-6"></div>
      </div>
    </div>
    </div>
  );
};

export default Loading;

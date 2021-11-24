import React from 'react';
import Feed from './Feed';
import Navbar from './Navbar';
import './Quora.css';
import Sidebar from './Sidebar';
import Widget from './Widget';

function Quora() {
  return (
    <div className="quora">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Quora;

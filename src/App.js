import React from 'react';
import './style.css';
import linkedin from "./linkedin.png"
import github from "./github.svg"
import gbs from "./vest1.jpg"

function App() {

  return (
    <div className="container">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet" />

        <img src={gbs} alt="team-goodbodys" height="100%" width="100%"/>
          <div id="header">
            Will Morton
          </div>
          <div id="main">
            Agile Delivery | Business Analysis | Start Ups | Venture Scaling
          </div>
          <div id="nav">
            Experience &nbsp; &nbsp;|&nbsp; &nbsp; Skills &nbsp; &nbsp;| &nbsp; &nbsp; Contact
          </div>
          <div id="footer">

              <div id="linkedin">
                <a href="https://www.linkedin.com/in/wilmorton/"/>
                <img src={linkedin}  height="100dp" width="100dp"/>
              </div>

              <div id="github">
                <a href="https://www.github.com/wilmorton"/>
                <img src={github}  height="100dp" width="100dp"/>
              </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.scss";
import Webicon from "./assets/image.svg";
import Arrowleft from "./assets/arrowleft.svg";
import Arrowright from "./assets/arrowright.svg";
import Blurleft from "./assets/leftblur.svg";
import Blurright from "./assets/blurright.svg";

function App() {
  const [screen, setScreen] = useState("usedWebsites");
  const changeScreen = (screenName) => {
    setScreen(screenName);
  };
  return (
    <div className="App">
      <div className="btn_container">
        <button class="btn">Today</button>
        <button class="btn active">Last 30 days</button>
      </div>
      <div className="container">
          <div className="box"></div>
        <div className="box">
          {screen === "usedWebsites" && (
            
              <>
                <div className="head">
                  <h1>Most Used Websites</h1>
                  <div className="side_btn">
                    <img src={Blurleft} ></img>
                    <img src={Arrowright} onClick={()=>changeScreen('socialMedia')}></img>
                  </div>
                </div>
                <div className="content">
                  <ul>
                    <li className="first_row">
                      <img src={Webicon}></img>
                      <span className="text">gmail.com</span>
                      <span className="time">1h 32m</span>
                    </li>
                    <li className="first_row">
                      <img src={Webicon}></img>
                      <span className="text">youtube.com</span>
                      <span className="time">44m</span>
                    </li>
                    <li className="first_row">
                      <img src={Webicon}></img>
                      <span className="text">bbc.com</span>
                      <span className="time">56m</span>
                    </li>
                    <li className="first_row">
                      <img src={Webicon}></img>
                      <span className="text">youtube.com</span>
                      <span className="time">44m</span>
                    </li>
                    <li className="first_row">
                      <img src={Webicon}></img>
                      <span className="text">bbc.com</span>
                      <span className="time">56m</span>
                    </li>
                  </ul>
                </div>
              </>
          )}
          { screen === 'socialMedia' &&
            <>
              <div className="head">
                <h1>Most Used Social Apps</h1>
                <div className="side_btn">
                  <img src={Arrowleft} onClick={()=>changeScreen('usedWebsites')}></img>
                  <img src={Blurright}></img>
                </div>
              </div>
              <div className="content">
                <ul>
                  <li className="first_row">
                    <div className="picture">f</div>
                    <span className="text">Facebook</span>
                    <span className="time">1h 32m</span>
                  </li>
                  <li className="first_row">
                    <div className="picture">t</div>
                    <span className="text">Twitter</span>
                    <span className="time">45m</span>
                  </li>
                  <li className="first_row">
                    <div className="picture">s</div>
                    <span className="text">Snapchat</span>
                    <span className="time">56m</span>
                  </li>
                  <li className="first_row">
                    <div className="picture">t</div>
                    <span className="text">Tik Tok</span>
                    <span className="time">2h 32m</span>
                  </li>
                  <li className="first_row">
                    <div className="picture">i</div>
                    <span className="text">Instagram</span>
                    <span className="time">34m</span>
                  </li>
                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
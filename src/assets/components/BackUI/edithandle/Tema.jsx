import React, { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";

function Tema() {
  const [active, setActive] = useState(false);

  return (
    <div className="theme">
      <div className="theme-contain">
        <div className="theme-contain-option">
          <h1>pilih theme</h1>
          <div className="temacontain-option-item"></div>
        </div>
        <div className="theme-contain-font">
          <h1>pilih font</h1>
          <div className="theme-contain-font-input">
            <p>main font</p>
            <div className="theme-contain-font-input-choose">
              <select className="">
                <option>font 1</option>
                <option>font 2</option>
                <option>font 3</option>
              </select>
              <h2>heading 1</h2>
            </div>
          </div>
          <div className="theme-contain-font-input">
            <p>main font</p>
            <div className="theme-contain-font-input-choose">
              <select className="">
                <option>font 1</option>
                <option>font 2</option>
                <option>font 3</option>
              </select>
              <h2>paragraph 1</h2>
            </div>
          </div>
        </div>
        <div className="theme-contain-sound">
          <h1>pilih backsound</h1>
          <div className="theme-contain-sound-list">
            <button
              onClick={() => setActive(!active)}
              className={
                "theme-contain-sound-list-button" + (active ? " disable" : "")
              }
            >
              track 1 {active ? <BiPause /> : <BiPlay />}
            </button>
          </div>
        </div>
      </div>
      <div className="theme-submit">
        <button className="theme-submit-btn">next</button>
      </div>
    </div>
  );
}

export default Tema;

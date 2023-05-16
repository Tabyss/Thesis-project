import React, { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";

function Tema() {
  const [active, setActive] = useState(false);

  return (
    <div className="tema">
      <div className="tema-contain">
        <div className="tema-contain-option">
          <h1>pilih tema</h1>
          <div className="temacontain-option-item"></div>
        </div>
        <div className="tema-contain-font">
          <h1>pilih font</h1>
          <div className="tema-contain-font-input">
            <div className="tema-contain-font-input-choose">
              <p>main font</p>
              <select className="">
                <option>font 1</option>
                <option>font 2</option>
                <option>font 3</option>
              </select>
            </div>
            <h2>heading 1</h2>
          </div>
          <div className="tema-contain-font-input">
            <div className="tema-contain-font-input-choose">
              <p>side font</p>
              <select>
                <option>font 1</option>
                <option>font 2</option>
                <option>font 3</option>
              </select>
            </div>
            <h2>paragraph 1</h2>
          </div>
        </div>
        <div className="tema-contain-sound">
          <h1>pilih backsound</h1>
          <div className="tema-contain-sound-list">
            <button onClick={() => setActive(!active)} className={"tema-contain-sound-list-button" + (active ? " disable" : "")}>
              track 1 {active ? <BiPause /> : <BiPlay />}
            </button>
          </div>
        </div>
      </div>
      <div className="tema-submit">
        <button className="tema-submit-btn">
          next
        </button>
      </div>
    </div>
  );
}

export default Tema;

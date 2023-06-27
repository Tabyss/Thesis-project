import React, { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";

function Tema() {
  const [active, setActive] = useState(false);

  const handleToggleSound = () => {
    setActive(!active); // Mengubah status pemutaran saat tombol diklik

    // Lakukan logika pemutaran backsound di sini
    const audioElement = document.getElementById("backsound");

    if (!active) {
      // Jika active === false, putar backsound
      audioElement.play();
    } else {
      // Jika active === true, jeda backsound
      audioElement.pause();
    }
  };

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
          <h1>Pilih backsound</h1>
          <div className="theme-contain-sound-list">
            <button
              onClick={handleToggleSound}
              className={
                "theme-contain-sound-list-button" + (active ? " disable" : "")
              }
            >
              track 1 {active ? <BiPause /> : <BiPlay />}
            </button>
          </div>
          <audio id="backsound" src="/StillGotTime.mp3" />
        </div>
      </div>
      <div className="theme-submit">
        <button className="theme-submit-btn">next</button>
      </div>
    </div>
  );
}

export default Tema;

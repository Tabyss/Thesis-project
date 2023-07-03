import React, { useState, useEffect } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import axios from "axios";

function Tema() {
  const [activeTrack, setActiveTrack] = useState(null);

  const handleSubmit = async () => {
    const TemaUndangan = document.getElementById("temaUndangan").value;
    const PrimaryFont = document.getElementById("fontPrimary").value;
    const SecondaryFont = document.getElementById("fontSecondary").value;
    const Backsound = document.getElementById("backsounds").value;

    try {
      const response = await axios.post("http://localhost:5000/theme", {
        tema_undangan: TemaUndangan,
        font_primary: PrimaryFont,
        font_secondary: SecondaryFont,
        backsound: Backsound,
      });
      console.log("Tema berhasil disimpan:", response.data);
    } catch (error) {
      console.error("Gagal menyimpan tema:", error);
    }
  };

  useEffect(() => {
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audioElement) => {
      if (activeTrack === audioElement.id) {
        audioElement.play();
        console.log(`Memutar backsound: ${activeTrack}`);
      } else {
        audioElement.pause();
        audioElement.currentTime = 0;
        console.log(`Jeda backsound: ${audioElement.id}`);
      }
    });
  }, [activeTrack]);

  const handleToggleSound = (track) => {
    if (activeTrack === track) {
      setActiveTrack(null);
    } else {
      setActiveTrack(track);
    }
  };

  return (
    <div className="theme">
      <div className="theme-contain">
        <div className="theme-contain-option">
          <h1>pilih theme</h1>
          <div className="temacontain-option-item"></div>
            <div className="theme-contain-font-input-choose">
              <select className="" id="temaUndangan">
                <option>Tema 1</option>
                <option>Tema 2</option>
                <option>Tema 3</option>
              </select>
            </div>
        </div>
        <div className="theme-contain-font">
          <h1>pilih font</h1>
          <div className="theme-contain-font-input">
            <div className="theme-contain-font-input-choose">
              <select className="" id="fontPrimary">
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
              <select className="" id="fontSecondary">
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
          <div className="theme-contain-sound-list" id="backsounds">
            <button
              onClick={() => handleToggleSound("track1")}
              id="track1"
              value="track 1"
              className={`theme-contain-sound-list-button ${
                activeTrack === "track1" ? "disable" : ""
              }`}
            >
              track 1 {activeTrack === "track1" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track2")}
              id="track2"
              value="track 2"
              className={`theme-contain-sound-list-button ${
                activeTrack === "track2" ? "disable" : ""
              }`}
            >
              track 2 {activeTrack === "track2" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track3")}
              id="track3"
              value="track 3"
              className={`theme-contain-sound-list-button ${
                activeTrack === "track3" ? "disable" : ""
              }`}
            >
              track 3 {activeTrack === "track3" ? <BiPause /> : <BiPlay />}
            </button>
          </div>
          <audio id="track1" src="/StillGotTime.mp3" />
          <audio id="track2" src="/SomeOtherTrack.mp3" />
          <audio id="track3" src="/AnotherTrack.mp3" />
        </div>
      </div>
      <div className="theme-submit">
        <button className="theme-submit-btn" onClick={handleSubmit}>
          next
        </button>
      </div>
    </div>
  );
}

export default Tema;

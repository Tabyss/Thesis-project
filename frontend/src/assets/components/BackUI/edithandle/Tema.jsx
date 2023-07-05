import React, { useState, useEffect } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
<<<<<<< HEAD
import Theme1 from "../../../theme/1/img/view-1.png";
import Theme2 from "../../../theme/2/img/view-2.png";
import EditData from "../Elements/EditData";
import { useParams } from "react-router-dom";

function Tema() {
  const [active, setActive] = useState(false);
  const [play, setPlay] = useState(false);
  const [theme, setTheme] = useState({});
  const [formTheme, setFormTheme] = useState({
    tema: "",
    font_1: "1",
    font_2: "1",
    sound: "",
  });

  const { id_undangan } = useParams();

  const handleChange = (e) => {
    let data = { ...formTheme };
    data[e.target.name] = [e.target.value];
    setFormTheme(data);
    console.log(formTheme);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:5000/edit/1/", {
  //       tema_undangan: formTheme.tema,
  //       font_primary: formtheme.font_1,
  //       font_secondary: formtheme.font_2,
  //       backsound: formtheme.sound,
  //     });
  //     navigate("/edit/2/${id_undangan}");
  //   } catch (error) {
  //     if (error.response) {
  //       // console.log(error.response.data.msg);
  //       setMsg(error.response.data.msg);
  //     }
  //   }
  // };

  const handleToggleSound = () => {
    setPlay(!play); // Mengubah status pemutaran saat tombol diklik
=======
import axios from "axios";

function Tema() {
  const [activeTrack, setActiveTrack] = useState(null);

  const handleSubmit = async () => {
    const TemaUndangan = document.getElementById("temaUndangan").value;
    const PrimaryFont = document.getElementById("fontPrimary").value;
    const SecondaryFont = document.getElementById("fontSecondary").value;
    const Backsound = document.getElementById("backsounds").value;
>>>>>>> 83e91cb2c39c9889bde69e59c56ba96ffa4e619b

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

<<<<<<< HEAD
    if (!play) {
      audioElement.play();
    } else {
      audioElement.pause();
=======
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
>>>>>>> 83e91cb2c39c9889bde69e59c56ba96ffa4e619b
    }
  };

  return (
<<<<<<< HEAD
    <>
      <form className="theme">
        <EditData id={1} />
        <div className="theme-contain">
          <div className="theme-contain-option">
            <h1>pilih theme</h1>
            <div className="theme-contain-option-item">
              <div className="theme-contain-option-item-radio">
                <input
                  className="radio-button"
                  type="radio"
                  name="tema"
                  value="1"
                  checked={formTheme.tema == 1}
                  onChange={handleChange}
                />
                <div className="radio-value">
                  <img src={Theme1} />
                </div>
              </div>
              <div className="theme-contain-option-item-radio">
                <input
                  className="radio-button"
                  type="radio"
                  name="tema"
                  value="2"
                  checked={formTheme.tema == 2}
                  onChange={handleChange}
                />
                <div className="radio-value">
                  <img src={Theme2} />
                </div>
              </div>
            </div>
          </div>
          <div className="theme-contain-font">
            <h1>pilih font</h1>
            <div className="theme-contain-font-input">
              <p>main font</p>
              <div className="theme-contain-font-input-choose">
                <select
                  className=""
                  name="font_1"
                  value={formTheme.font_1}
                  onChange={handleChange}
                >
                  <option value="1">font 1</option>
                  <option value="2">font 2</option>
                  <option value="3">font 3</option>
                </select>
                <h2 className={`font-${formTheme.font_1}`}>heading 1</h2>
              </div>
            </div>
            <div className="theme-contain-font-input">
              <p>main font</p>
              <div className="theme-contain-font-input-choose">
                <select
                  className=""
                  name="font_2"
                  value={formTheme.font_2}
                  onChange={handleChange}
                >
                  <option value="1">font 1</option>
                  <option value="2">font 2</option>
                  <option value="3">font 3</option>
                </select>
                <h2 className={`font-${formTheme.font_2}`}>paragraph 1</h2>
              </div>
            </div>
          </div>
          <div className="theme-contain-sound">
            <h1>Pilih backsound</h1>
            <div className="theme-contain-sound-list">
              <button
                onClick={() => setActive(!active)}
                className={
                  "theme-contain-sound-list-button" + (active ? " disable" : "")
                }
              >
                track 1
                <div onClick={handleToggleSound} className="play">
                  {play ? <BiPause /> : <BiPlay />}
                </div>
              </button>
            </div>
            <audio id="backsound" src="/StillGotTime.mp3" />
          </div>
        </div>
        <div className="theme-submit">
          <button className="theme-submit-btn" type="submit">
            next
          </button>
        </div>
      </form>
    </>
=======
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
>>>>>>> 83e91cb2c39c9889bde69e59c56ba96ffa4e619b
  );
}

export default Tema;

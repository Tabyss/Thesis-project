import React, { useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
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

    // Lakukan logika pemutaran backsound di sini
    const audioElement = document.getElementById("backsound");

    if (!play) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };

  return (
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
  );
}

export default Tema;

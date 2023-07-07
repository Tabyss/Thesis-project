import React, { useState, useEffect } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import Theme1 from "../../../theme/1/img/view-1.png";
import Theme2 from "../../../theme/2/img/view-2.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import EditData from "../Elements/EditData";

function Tema() {
  const { isError } = useSelector((state) => state.auth);
  const { id_undangan } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [idUndangan, setIdUndangan] = useState("");
  const [idtema, setIdTema] = useState("");
  const [activeTrack, setActiveTrack] = useState(null);
  const [formTheme, setFormTheme] = useState({
    tema: "",
    font_1: "1",
    font_2: "1",
    sound: "",
  });

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const handleChange = (e) => {
    let data = { ...formTheme };
    data[e.target.name] = e.target.value;
    setFormTheme(data);
    console.log(formTheme);
  };
  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/tema/${id_undangan}`
        );
        setIdUndangan(response.data.id_undangan);
        setIdTema(response.data.id_tema)
        return setFormTheme({
          tema: response.data.tema_undangan,
          font_1: response.data.font_primary,
          font_2: response.data.font_secondary,
          sound: response.data.backsound,
        });
      } catch (error) {
        console.log(error);
      }
    };
    handleGet();
  }, [id_undangan]);

  const handleSubmit = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    const TemaUndangan = document.getElementById("temaUndangan").value;
    const PrimaryFont = document.getElementById("fontPrimary").value;
    const SecondaryFont = document.getElementById("fontSecondary").value;
    const Backsound = document.getElementById("backsounds").value;
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
    const TemaUndangan = formTheme.tema.toString();
    const PrimaryFont = formTheme.font_1;
    const SecondaryFont = formTheme.font_2;
    const Backsound = activeTrack;
>>>>>>> bb43b2c (add login middleware, connect frontend)

    try {
      const response = await axios.post("http://localhost:5000/theme", {
        tema_undangan: TemaUndangan,
        font_primary: PrimaryFont,
        font_secondary: SecondaryFont,
        backsound: Backsound,
        id_undangan: idUndangan
      });
      console.log("Tema berhasil disimpan:", response.data);
      navigate(`/edit/2/${id_undangan}`);
    } catch (error) {
      console.error("Gagal menyimpan tema:", error);
=======
    if (idUndangan === id_undangan) {
      try {
        const response = await axios.patch(`http://localhost:5000/theme/${idtema}`, {
          tema_undangan: formTheme.tema,
          font_primary: formTheme.font_1,
          font_secondary: formTheme.font_2,
          backsound: activeTrack,
          id_undangan: idUndangan,
        });
        navigate(`/edit/2/${id_undangan}`);
        return response.data;
      } catch (error) {}
    } else {
      try {
        const response = await axios.post("http://localhost:5000/theme", {
          tema_undangan: formTheme.tema,
          font_primary: formTheme.font_1,
          font_secondary: formTheme.font_2,
          backsound: activeTrack,
          id_undangan: idUndangan,
        });
        navigate(`/edit/2/${id_undangan}`);
        return response.data
      } catch (error) {}
>>>>>>> 8005205 (fix bug)
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
<<<<<<< HEAD
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
>>>>>>> bb43b2c (add login middleware, connect frontend)
    }
  };

  return (
    <div className="theme">
      <EditData id={1} />
      <div className="theme-contain">
        <div className="theme-contain-option">
          <h1>pilih tema</h1>
          <div className="theme-contain-option-item">
            <div className="theme-contain-option-item-radio">
              <input
                className="radio-button"
                type="radio"
                name="tema"
                value="1"
                checked={formTheme.tema === "1"}
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
                checked={formTheme.tema === "2"}
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
                id="fontPrimary"
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
                id="fontSecondary"
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
          <div className="theme-contain-sound-list" id="backsounds">
            <button
              onClick={() => handleToggleSound("track1")}
              id="track1"
              value="/StillGotTime.mp3"
              onChange={handleChange}
              className={`theme-contain-sound-list-button ${
                activeTrack === "track1" ? "disable" : ""
              }`}
            >
              track 1 {activeTrack === "track1" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track2")}
              id="track2"
              value="track2"
              onChange={handleChange}
              className={`theme-contain-sound-list-button ${
                activeTrack === "track2" ? "disable" : ""
              }`}
            >
              track 2 {activeTrack === "track2" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track3")}
              id="track3"
              value="track3"
              onChange={handleChange}
              className={`theme-contain-sound-list-button ${
                activeTrack === "track3" ? "disable" : ""
              }`}
            >
              track 3 {activeTrack === "track3" ? <BiPause /> : <BiPlay />}
            </button>
          </div>
          <audio id="track1" src="/track1.mp3" />
          <audio id="track2" src="/track2.mp3" />
          <audio id="track3" src="/track3.mp3" />
        </div>
      </div>
      <div className="theme-submit">
        <button className="theme-submit-btn" onClick={handleSubmit}>
          next
        </button>
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
>>>>>>> bb43b2c (add login middleware, connect frontend)
  );
}

export default Tema;

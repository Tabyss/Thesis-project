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
  const [idTema, setIdTema] = useState("");
  const [activeTrack, setActiveTrack] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
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
    setIdUndangan(id_undangan);
  }, [id_undangan]);

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tema/${id_undangan}`);
        const data = response.data;
        if (data != null) {
          setIdTema(response.data.id_tema)
          return setFormTheme({
            tema: response.data.tema_undangan,
            font_1: response.data.font_primary,
            font_2: response.data.font_secondary,
            sound: response.data.backsound,
          });
        } else {
          setIdTema(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    handleGet();
  }, [id_undangan]);

  const handleSubmit = async () => {
    if (idTema != null) {
      try {
        const response = await axios.patch(`http://localhost:5000/theme/${idTema}`, {
          tema_undangan: formTheme.tema,
          font_primary: formTheme.font_1,
          font_secondary: formTheme.font_2,
          backsound: activeTrack,
          id_undangan: idUndangan,
        });
        navigate(`/edit/2/${id_undangan}`);
        return response.data;
      } catch (error) { }
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
      } catch (error) { }
    }
  
    if (!buttonClicked) {
      // Tampilkan pesan kesalahan karena tidak ada tombol yang diklik
      alert("Harap Pilih Backsound");
      return;
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
    setButtonClicked(true);
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
                <option value="1">Cinzel</option>
                <option value="2">Lato</option>
                <option value="3">Playfair Display</option>
                <option value="4">Water Brush</option>
                <option value="5">Allura</option>
              </select>
              <h2 className={`font-${formTheme.font_1}`}>heading 1</h2>
            </div>
          </div>
          <div className="theme-contain-font-input">
            <p>secondary font</p>
            <div className="theme-contain-font-input-choose">
              <select
                className=""
                id="fontSecondary"
                name="font_2"
                value={formTheme.font_2}
                onChange={handleChange}
              >
                <option value="1">Cinzel</option>
                <option value="2">Lato</option>
                <option value="3">Playfair Display</option>
                <option value="4">Water Brush</option>
                <option value="5">Allura</option>
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
              className={`theme-contain-sound-list-button ${activeTrack === "track1" ? "disable" : ""
                }`}
            >
              track 1 {activeTrack === "track1" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track2")}
              id="track2"
              value="track2"
              onChange={handleChange}
              className={`theme-contain-sound-list-button ${activeTrack === "track2" ? "disable" : ""
                }`}
            >
              track 2 {activeTrack === "track2" ? <BiPause /> : <BiPlay />}
            </button>
            <button
              onClick={() => handleToggleSound("track3")}
              id="track3"
              value="track3"
              onChange={handleChange}
              className={`theme-contain-sound-list-button ${activeTrack === "track3" ? "disable" : ""
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
  );
}

export default Tema;
import React, { useState, useEffect, useRef  } from "react";
import { useParams } from "react-router-dom";
import "./ThemeOne.scss";
import QRCode from "qrcode.react";
import axios from "axios";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main6 from "./Main6";
import Modal from "./Modal";

function ThemeOne() {
  const [invite, setInvite] = useState("");
  const [guest, setGuest] = useState("");
  const [idUndangan, setIdUndangan] = useState("");
  const [theme, setTheme] = useState("");
  const [pop, setPop] = useState(true);
  const { id_tamu, url_undangan } = useParams();
  const audioRef = useRef(null);

  const fetchGuest = async (id_tamu) => {
    const response = await axios.get(`http://localhost:5000/tamu/${id_tamu}`);
    setGuest(response.data);
    // console.log(guest);
    setIdUndangan(response.data.id_undangan);
  }

  const fetchTheme = async (idUndangan) => {
    const response = await axios.get(`http://localhost:5000/tema/${idUndangan}`);
    setTheme(response.data);
  }

  const fetchInvite = async (url_undangan) => {
    const response = await axios.get(`http://localhost:5000/invitation/${url_undangan}`);
    setInvite(response.data);
  }

  useEffect(() => {
    fetchGuest(id_tamu);
    fetchTheme(idUndangan);
    fetchInvite(url_undangan);
  }, [id_tamu, idUndangan, url_undangan]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const toggleModal = () => {
    setPop(!pop);
  };

  return (
    <>
     <audio ref={audioRef} id="track1" src="/track1.mp3" autoPlay loop onLoad={playAudio} />
      {pop ? (
        <Modal toggleModal={toggleModal} invite={invite} guest={guest} theme={theme} />
      ) : (
        <>
          <div className="main-a">
            <Main1 invite={invite} theme={theme} />
            <Main2 idUndangan={idUndangan} theme={theme} />
            <Main3 idUndangan={idUndangan} theme={theme} />
            <Main4 idUndangan={idUndangan} theme={theme} />
            <div className="main-5">
              <div className="kutipan">
                <h3 className={`font-${theme.font_secondary}`}>menuju akad nikah</h3>
                <h2 className={`font-${theme.font_secondary}`}>00.00.00.00</h2>
              </div>
            </div>
            <Main6 idUndangan={idUndangan} theme={theme} />
            <div className="main-a-7">
              <h3 className={`font-${theme.font_secondary}`}>Scan Me</h3>
              <QRCode value={guest.qrcode} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ThemeOne;

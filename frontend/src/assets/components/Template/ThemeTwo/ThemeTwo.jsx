import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import QRCode from "qrcode.react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import "./ThemeTwo.scss";
import Modal from "./Modal";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main6 from "./Main6";

function ThemeTwo() {
  const [invite, setInvite] = useState("");
  const [guest, setGuest] = useState("");
  const [idUndangan, setIdUndangan] = useState("");
  const [theme, setTheme] = useState("");
  const [pop, setPop] = useState(true);
  const { id_tamu, url_undangan } = useParams();
  const [couple, setCouple] = useState("");
  const audioRef = useRef(null);

  const fetchGuest = async (id_tamu) => {
    const response = await axios.get(`http://localhost:5000/tamu/${id_tamu}`);
    setGuest(response.data);
    // console.log(guest);
    setIdUndangan(response.data.id_undangan);
  }

  const fetchCouple = async () => {
    const response = await axios.get(`http://localhost:5000/pasangan/${idUndangan}`);
    setCouple(response.data);
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
    fetchCouple(idUndangan);
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
     <audio ref={audioRef} id="track1" src={`/${theme.backsound}.mp3`} autoPlay loop onLoad={playAudio} />
      {pop ? (
        <Modal toggleModal={toggleModal} invite={invite} guest={guest} theme={theme} couple={couple} />
      ) : (
        <>
          <div className="main">
            <Main1 invite={invite} theme={theme} couple={couple} />
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
            <div className="main-7">
              <h3 className={`font-${theme.font_secondary}`}>Scan Me</h3>
              <QRCode value={guest.qrcode} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ThemeTwo;

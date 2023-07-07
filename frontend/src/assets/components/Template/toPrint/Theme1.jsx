import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import "./Theme1.scss";
import axios from "axios";

function Theme1() {
  const [invite, setInvite] = useState("");
  const [guest, setGuest] = useState("");
  const [idUndangan, setIdUndangan] = useState("");
  const [theme, setTheme] = useState("");
  const { id_tamu, url_undangan } = useParams();
  const [dataPria, setDataPria] = useState("");
  const [dataWanita, setDataWanita] = useState("");
  const [couple, setCouple] = useState("");
  const [event, setEvent] = useState([]);

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

  const fetchEvent = async (idUndangan) => {
    const response = await axios.get(`http://localhost:5000/acara/${idUndangan}`);
    setEvent(response.data);
  }

  const fetchCouple = async () => {
    const response = await axios.get(`http://localhost:5000/pasangan/${idUndangan}`);
    setCouple(response.data);
  }

  const fetchDataPria = async (idUndangan) => {
    const response = await axios.get(`http://localhost:5000/pria/${idUndangan}`);
    setDataPria(response.data);
  }

  const fetchDataWanita = async (idUndangan) => {
    const response = await axios.get(`http://localhost:5000/wanita/${idUndangan}`);
    setDataWanita(response.data);
  }

  const fetchInvite = async (url_undangan) => {
    const response = await axios.get(`http://localhost:5000/invitation/${url_undangan}`);
    setInvite(response.data);
  }

  useEffect(() => {
    fetchGuest(id_tamu);
    fetchTheme(idUndangan);
    fetchDataPria(idUndangan);
    fetchDataWanita(idUndangan);
    fetchCouple(idUndangan);
    fetchEvent(idUndangan);
    fetchInvite(url_undangan);
  }, [id_tamu, idUndangan, url_undangan]);

  return (
    <>
      <div className="main-print1">
        <div className="main-print1-1">
          <div className="nikah">
            <h3 className={`font-${theme.font_secondary}`}>Undangan pernikahan</h3>
            <div className="nikah-nama">
              <h1 className={`font-${theme.font_primary}`}>{invite.nama_pria}</h1>
              <h1 className={`font-${theme.font_primary}`}>&</h1>
              <h1 className={`font-${theme.font_primary}`}>{invite.nama_wanita}</h1>
            </div>
            <h3 className={`font-${theme.font_secondary}`}>{invite.tgl_nikah}</h3>
          </div>
          <div className="qrcode">
            <h3 className={`font-${theme.font_secondary}`}>Scan Me</h3>
            <QRCode value={guest.qrcode} />
          </div>
        </div>
        <div className="main-print1-2">
          <div className="mempelai">
            <div className="judul">
              <h2 className={`font-${theme.font_secondary}`}>Mempelai</h2>
            </div>
            <div className="mempelai-nama">
              <h3 className={`font-${theme.font_secondary}`}>Mempelai Pria</h3>
              <h1 className={`font-${theme.font_primary}`}>{dataPria.nama_lengkap}</h1>
              <h3 className={`font-${theme.font_secondary}`}>putra dari</h3>
              <h3 className={`font-${theme.font_secondary}`}>{dataPria.nama_ayah}</h3>
              <h3 className={`font-${theme.font_secondary}`}>&{dataPria.nama_ibu}</h3>
            </div>
            <h1 className={`and font-${theme.font_primary}`}>&</h1>
            <div className="mempelai-nama">
              <h3 className={`font-${theme.font_secondary}`}>Mempelai Wanita</h3>
              <h1 className={`font-${theme.font_primary}`}>{dataWanita.nama_lengkap}</h1>
              <h3 className={`font-${theme.font_secondary}`}>putri dari</h3>
              <h3 className={`font-${theme.font_secondary}`}>{dataWanita.nama_ayah}</h3>
              <h3 className={`font-${theme.font_secondary}`}>&{dataWanita.nama_ibu}</h3>
            </div>
            <div className="kutipan">
              <p className={`font-${theme.font_secondary}`}>“{couple.isi_kutipan}”</p>
              <h3 className={`font-${theme.font_secondary}`}>{couple.judul_kutipan}</h3>
            </div>
          </div>
          <div className="agenda">
            <div className="judul">
              <h2 className={`font-${theme.font_primary}`}>Agenda</h2>
            </div>
            {event && event.map((event) => (
              <div className="agenda-nama">
                <h1 className={`font-${theme.font_primary}`}>{event.nama_acara}</h1>
                <h3 className={`font-${theme.font_secondary}`}>{event.tgl_acara}</h3>
                <h3 className={`font-${theme.font_secondary}`}>{event.jam_mulai} - {event.jam_selesai}</h3>
                <h3 className={`font-${theme.font_secondary}`}>{event.alamat}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Theme1;

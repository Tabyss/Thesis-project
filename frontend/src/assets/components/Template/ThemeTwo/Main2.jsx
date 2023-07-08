import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Main2({ idUndangan, theme }) {
    const [dataPria, setDataPria] = useState("");
    const [dataWanita, setDataWanita] = useState("");

    const fetchDataPria = async (idUndangan) => {
        const response = await axios.get(`http://localhost:5000/pria/${idUndangan}`);
        setDataPria(response.data);
    }

    const fetchDataWanita = async (idUndangan) => {
        const response = await axios.get(`http://localhost:5000/wanita/${idUndangan}`);
        setDataWanita(response.data);
    }
    useEffect(() => {
        fetchDataPria(idUndangan);
        fetchDataWanita(idUndangan);
    }, [idUndangan]);

    return (
        <div className="main-b-2">
            <div className="mempelai">
                <div className="judul">
                    <h2 className={`font-${theme.font_primary}`}>Mempelai</h2>
                </div>
                <div className="mempelai-nama-pria">
                    <div className="foto">
                        <img src={dataPria.url_foto} />
                    </div>
                    <div className="info">
                        <h3 className={`font-${theme.font_secondary}`}>Mempelai Pria</h3>
                        <h1 className={`font-${theme.font_primary}`}>{dataPria.nama_lengkap}</h1>
                        <h3 className={`font-${theme.font_secondary}`}>putra dari</h3>
                        <h3 className={`font-${theme.font_secondary}`}>{dataPria.nama_ayah}</h3>
                        <h3 className={`font-${theme.font_secondary}`}>{dataPria.nama_ibu}</h3>
                        <div className="social">
                            <Link to={dataPria.facebook}><BsFacebook /></Link>
                            <Link to={dataPria.instagram}><BsInstagram /></Link>
                            <Link to={dataPria.twitter}><BsTwitter /></Link>
                        </div>
                    </div>
                </div>
                <h1 className={`and font-${theme.font_primary}`}>&</h1>
                <div className="mempelai-nama-wanita">
                    <div className="foto">
                        <img src={dataWanita.url_foto} />
                    </div>
                    <div className="info">
                        <h3 className={`font-${theme.font_secondary}`}>Mempelai Wanita</h3>
                        <h1 className={`font-${theme.font_primary}`}>{dataWanita.nama_lengkap}</h1>
                        <h3 className={`font-${theme.font_secondary}`}>putri dari</h3>
                        <h3 className={`font-${theme.font_secondary}`}>{dataWanita.nama_ayah}</h3>
                        <h3 className={`font-${theme.font_secondary}`}>{dataWanita.nama_ibu}</h3>
                        <div className="social">
                            <Link to={dataWanita.facebook}><BsFacebook /></Link>
                            <Link to={dataWanita.instagram}><BsInstagram /></Link>
                            <Link to={dataWanita.twitter}><BsTwitter /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main2
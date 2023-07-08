import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";
import "./Theme2.scss";
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
            <div className="main-print2">
                <div className="main-print2-1" style={{ backgroundImage: `url(${couple.url_foto})` }}>
                    <div className="nikah">
                        <div className="bg-linear"></div>
                        <h3 className={`font-${theme.font_secondary}`}>Undangan pernikahan</h3>
                        <div className="nikah-nama">
                            <h1 className={`font-${theme.font_primary}`}>{invite.nama_pria} & {invite.nama_wanita}</h1>
                        </div>
                        <div className="vector">
                            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="2" viewBox="0 0 284 2" fill="none">
                                <path d="M0 0.979998C94.32 -0.330002 189.68 -0.330002 284 0.979998C189.68 2.29 94.32 2.29 0 0.979998Z" fill="#EDE6DB" />
                            </svg>
                        </div>
                        <h2 className={`font-${theme.font_secondary}`}>{invite.tgl_nikah}</h2>
                    </div>
                    <div className="qrcode">
                        <h3 className={`font-${theme.font_secondary}`}>Scan Me</h3>
                        <QRCode value={guest.qrcode} />
                    </div>
                </div>
                <div className="main-print2-2">
                    <div className="mempelai">
                        <div className="judul">
                            <h2 className={`font-${theme.font_secondary}`}>Mempelai</h2>
                        </div>
                        <div className="mempelai-nama pria">
                            <h1 className={`font-${theme.font_primary}`}>{dataPria.nama_lengkap}</h1>
                            <h3 className={`font-${theme.font_secondary}`}>putra dari</h3>
                            <h3 className={`font-${theme.font_secondary}`}>{dataPria.nama_ayah}</h3>
                            <h3 className={`font-${theme.font_secondary}`}>&{dataPria.nama_ibu}</h3>
                        </div>
                        <h1 className={`and font-${theme.font_primary}`}>&</h1>
                        <div className="mempelai-nama wanita">
                            <h1 className={`font-${theme.font_primary}`}>{dataWanita.nama_lengkap}</h1>
                            <h3 className={`font-${theme.font_secondary}`}>putri dari</h3>
                            <h3 className={`font-${theme.font_secondary}`}>{dataWanita.nama_ayah}</h3>
                            <h3 className={`font-${theme.font_secondary}`}>&{dataWanita.nama_ibu}</h3>
                        </div>
                        <div className="image"><img src={couple.url_foto} alt="" /></div>
                    </div>
                    <div className="agenda">
                            <div className="judul">
                                <h2 className={`font-${theme.font_secondary}`}>Agenda</h2>
                            </div>
                        <div className="agenda-content">
                            {event && event.map((event) => (
                                <div className="agenda-content-nama">
                                    <h1 className={`font-${theme.font_primary}`}>{event.nama_acara}</h1>
                                    <h3 className={`font-${theme.font_secondary}`}>{event.tgl_acara}</h3>
                                    <h3 className={`font-${theme.font_secondary}`}>{event.jam_mulai} - {event.jam_selesai}</h3>
                                    <h3 className={`font-${theme.font_secondary}`}>{event.alamat}</h3>
                                </div>
                            ))}
                            <div className="kutipan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="301" height="22" viewBox="0 0 301 22" fill="none">
                                    <path d="M298.441 20.9174C296.173 20.3274 293.726 19.5408 291.191 17.8254L290.792 17.5523L290.765 18.033C290.716 19.0109 289.897 19.9778 288.329 20.9065H182.42C176.197 20.0816 169.773 17.7653 165.829 12.663L165.321 12.0074C165.479 14.0833 165.299 16.3013 163.999 18.0111C162.863 19.5899 160.989 20.6169 159.028 20.9119H156.744C155.848 20.7644 154.991 20.4476 154.237 19.9341C151.396 17.9674 151.287 12.0784 154.679 10.6089C157.148 9.47265 160.923 11.1224 160.737 14.1161C160.71 15.0339 160.333 15.9735 159.59 16.5471C158.569 17.3993 156.64 17.5468 155.881 16.2794C155.641 15.8752 155.619 15.3726 155.701 14.9191C155.466 15.8588 155.99 16.8858 156.952 17.1371C160.229 18.0221 162.103 13.761 159.88 11.5158C158.558 10.1337 156.356 9.68024 154.592 10.4177C154.04 10.6472 153.587 10.9804 153.21 11.3792C153.729 10.456 154.313 9.642 154.98 8.93729L155.089 8.82257L154.958 8.7297C152.631 7.11268 151.478 3.27773 150.713 0.742953L150.489 0L150.265 0.742953C149.506 3.27773 148.353 7.11268 146.02 8.7297L145.889 8.82257L145.999 8.93729C146.665 9.642 147.255 10.456 147.769 11.3792C147.397 10.9804 146.938 10.6472 146.386 10.4177C144.622 9.68024 142.42 10.1337 141.098 11.5158C138.88 13.7556 140.749 18.0221 144.026 17.1371C144.988 16.8913 145.518 15.8642 145.277 14.9191C145.359 15.378 145.338 15.8752 145.097 16.2794C144.338 17.5468 142.415 17.3993 141.388 16.5471C140.645 15.9735 140.273 15.0339 140.241 14.1161C140.055 11.117 143.83 9.47265 146.299 10.6089C149.692 12.073 149.582 17.9674 146.742 19.9341C145.982 20.4476 145.125 20.7644 144.234 20.9119H141.951C139.989 20.6224 138.116 19.5954 136.979 18.0111C135.685 16.3013 135.504 14.0833 135.657 12.0074L135.149 12.663C131.205 17.7653 124.781 20.0816 118.558 20.9065H12.6659C11.1035 19.9778 10.284 19.0109 10.2294 18.033L10.2021 17.5523L9.8033 17.8254C7.26852 19.5408 4.82115 20.3274 2.55405 20.9174L0.5 21.4528H300.5L298.446 20.9174H298.441ZM4.56985 20.9065C6.22511 20.382 7.96231 19.6664 9.74321 18.5137C9.93987 19.355 10.5681 20.1417 11.6498 20.9065H4.57532H4.56985ZM165.916 13.619C169.287 17.596 174.198 19.8084 179.246 20.9065H160.792C163.857 19.8467 165.878 16.8913 165.916 13.619ZM152.308 17.9237C152.833 19.3987 153.985 20.3766 155.362 20.901H150.658C150.893 18.399 151.309 16.2302 151.92 14.3674C151.767 15.5747 151.92 16.853 152.308 17.9237ZM150.495 0.939617C151.254 3.46347 152.396 7.16731 154.679 8.85534C152.456 11.2699 151.085 14.87 150.495 19.8303C149.91 14.87 148.533 11.2699 146.31 8.85534C148.593 7.16185 149.735 3.46347 150.495 0.939617ZM148.681 17.9237C149.063 16.853 149.216 15.5747 149.069 14.3674C149.681 16.2302 150.101 18.4045 150.331 20.9065H145.627C146.998 20.3766 148.156 19.4042 148.681 17.9292V17.9237ZM135.073 13.619C135.106 16.8858 137.132 19.8412 140.197 20.9065H121.743C126.797 19.8139 131.702 17.596 135.073 13.619ZM289.334 20.9065C290.415 20.1417 291.044 19.355 291.24 18.5137C293.027 19.6664 294.759 20.382 296.414 20.9065H289.328H289.334Z" fill="#1A3C40" />
                                </svg>
                                <p className={`font-${theme.font_secondary}`}>“{couple.isi_kutipan}”</p>
                                <h3 className={`font-${theme.font_secondary}`}>{couple.judul_kutipan}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="22" viewBox="0 0 300 22" fill="none">
                                    <path d="M297.941 0.988359C295.673 1.57835 293.226 2.36501 290.691 4.08035L290.292 4.3535L290.265 3.87277C290.216 2.89491 289.397 1.92798 287.829 0.999285H181.92C175.697 1.82418 169.273 4.14045 165.329 9.24278L164.821 9.89833C164.979 7.82243 164.799 5.6045 163.499 3.89462C162.363 2.31584 160.489 1.28882 158.528 0.993822H156.244C155.348 1.14132 154.491 1.45817 153.737 1.97168C150.896 3.93832 150.787 9.82731 154.179 11.2968C156.648 12.4331 160.423 10.7833 160.237 7.78966C160.21 6.87189 159.833 5.93227 159.09 5.35867C158.069 4.50646 156.14 4.35896 155.381 5.62635C155.141 6.03061 155.119 6.53319 155.201 6.98661C154.966 6.047 155.49 5.01997 156.452 4.76868C159.729 3.88369 161.603 8.14474 159.38 10.39C158.058 11.7721 155.856 12.2255 154.092 11.488C153.54 11.2586 153.087 10.9254 152.71 10.5266C153.229 11.4498 153.813 12.2638 154.48 12.9685L154.589 13.0832L154.458 13.1761C152.131 14.7931 150.978 18.628 150.213 21.1628L149.989 21.9058L149.765 21.1628C149.006 18.628 147.853 14.7931 145.52 13.1761L145.389 13.0832L145.499 12.9685C146.165 12.2638 146.755 11.4498 147.269 10.5266C146.897 10.9254 146.438 11.2586 145.886 11.488C144.122 12.2255 141.92 11.7721 140.598 10.39C138.38 8.15021 140.249 3.88369 143.526 4.76868C144.488 5.01451 145.018 6.04153 144.777 6.98661C144.859 6.52773 144.838 6.03061 144.597 5.62635C143.838 4.35896 141.915 4.50646 140.888 5.35867C140.145 5.93227 139.773 6.87189 139.741 7.78966C139.555 10.7888 143.33 12.4331 145.799 11.2968C149.192 9.83278 149.082 3.93832 146.242 1.97168C145.482 1.45817 144.625 1.14132 143.734 0.993822H141.451C139.489 1.28336 137.616 2.31038 136.479 3.89462C135.185 5.6045 135.004 7.82243 135.157 9.89833L134.649 9.24278C130.705 4.14045 124.281 1.82418 118.058 0.999285H12.1659C10.6035 1.92798 9.78403 2.89491 9.72941 3.87277L9.70209 4.3535L9.3033 4.08035C6.76852 2.36501 4.32115 1.57835 2.05405 0.988359L0 0.452995H300L297.946 0.988359H297.941ZM4.06985 0.999285C5.72511 1.52372 7.46231 2.23936 9.24321 3.39203C9.43987 2.55075 10.0681 1.76409 11.1498 0.999285H4.07532H4.06985ZM165.416 8.28678C168.787 4.3098 173.698 2.09733 178.746 0.999285H160.292C163.357 2.05909 165.378 5.01451 165.416 8.28678ZM151.808 3.98202C152.333 2.50704 153.485 1.52919 154.862 1.00475H150.158C150.393 3.50675 150.809 5.67552 151.42 7.53836C151.267 6.33107 151.42 5.05275 151.808 3.98202ZM149.995 20.9661C150.754 18.4423 151.896 14.7385 154.179 13.0504C151.956 10.6358 150.585 7.03578 149.995 2.07548C149.41 7.03578 148.033 10.6358 145.81 13.0504C148.093 14.7439 149.235 18.4423 149.995 20.9661ZM148.181 3.98202C148.563 5.05275 148.716 6.33107 148.569 7.53836C149.181 5.67552 149.601 3.50129 149.831 0.999285H145.127C146.498 1.52918 147.656 2.50158 148.181 3.97656V3.98202ZM134.573 8.28678C134.606 5.01997 136.632 2.06455 139.697 0.999285H121.243C126.297 2.09186 131.202 4.3098 134.573 8.28678ZM288.834 0.999285C289.915 1.76409 290.544 2.55075 290.74 3.39203C292.527 2.23936 294.259 1.52372 295.914 0.999285H288.828H288.834Z" fill="#1A3C40" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Theme1;

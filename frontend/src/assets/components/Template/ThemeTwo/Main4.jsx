import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

function Main4({ idUndangan, theme }) {
    const [event, setEvent] = useState([]);

    const fetchEvent = async (idUndangan) => {
        const response = await axios.get(`http://localhost:5000/acara/${idUndangan}`);
        setEvent(response.data);
    }
    useEffect(() => {
        fetchEvent(idUndangan);
    }, [idUndangan])
    return (
        <div className="main-4">
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
                        <Link to={event.link_maps}>show site</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Main4
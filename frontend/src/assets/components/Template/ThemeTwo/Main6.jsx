import React, { useState, useEffect } from "react";
import axios from "axios";

function Main6({ idUndangan, theme }) {
    const [gallery, setGallery] = useState([]);

    const fetchGallery = async (idUndangan) => {
        const response = await axios.get(`http://localhost:5000/galeri/${idUndangan}`);
        setGallery(response.data);
    }

    useEffect(() => {
        fetchGallery(idUndangan);
    }, [idUndangan])
    return (
        <div className="main-6">
            <div className="gallery">
                <div className="judul">
                    <h2 className={`font-${theme.font_primary}`}>gallery</h2>
                </div>
                <div className="gallery-content">
                    {gallery && gallery.map((gallery) => (
                        <div className="gallery-content-nama">
                            <img src={gallery.url_foto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main6
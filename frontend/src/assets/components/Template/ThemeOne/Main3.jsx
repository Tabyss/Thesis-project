import React, { useState, useEffect } from "react";
import axios from "axios";

function Main3({ idUndangan, theme }) {
    const [couple, setCouple] = useState("");
    const fetchCouple = async () => {
        const response = await axios.get(`http://localhost:5000/pasangan/${idUndangan}`);
        setCouple(response.data);
    }
    useEffect(() => {
        fetchCouple();
    }, [idUndangan])
    return (
        <div className="main-a-3">
            <div className="kutipan">
                <p className={`font-${theme.font_secondary}`}>“{couple.isi_kutipan}”</p>
                <h3 className={`font-${theme.font_secondary}`}>{couple.judul_kutipan}</h3>
            </div>
        </div>
    )
}

export default Main3
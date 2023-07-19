import React from "react";

function Main1({ invite, theme, couple }) {
    return (
        <div className="main-b-1"  style={{ backgroundImage: `url(${couple.url_foto})` }}>
            <div className="main-b-1-bg"></div>
            <div className="nikah">
                <h3 className={`judul font-${theme.font_secondary}`}>Undangan pernikahan</h3>
                <div className="nikah-nama">
                    <h1 className={`font-${theme.font_primary}`}>{invite.nama_pria}</h1>
                    <h1 className={`font-${theme.font_primary}`}>&</h1>
                    <h1 className={`font-${theme.font_primary}`}>{invite.nama_wanita}</h1>
                </div>
                <h3 className={`font-${theme.font_secondary}`}>{invite.tgl_nikah}</h3>
            </div>
        </div>
    )
}

export default Main1
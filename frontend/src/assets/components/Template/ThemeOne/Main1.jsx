import React from "react";

function Main1({ invite, theme }) {
    return (
        <div className="main-a-1">
            <div className="nikah">
                <h3 className={`font-${theme.font_primary}`}>Undangan pernikahan</h3>
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
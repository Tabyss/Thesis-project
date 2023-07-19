function Modal({ toggleModal, invite, guest, theme, couple }) {

    return (
        <div className="modal-2" style={{ backgroundImage: `url(${couple.url_foto})` }}>
            <h3 className={`modal-2-judul font-${theme.font_secondary}`}>Undangan pernikahan</h3>
            <div className="modal-2-nama">
                <h1 className={`font-${theme.font_primary}`}>{invite.nama_pria}</h1>
                <h1 className={`font-${theme.font_primary}`}>&</h1>
                <h1 className={`font-${theme.font_primary}`}>{invite.nama_wanita}</h1>
            </div>
            <h3>{invite.tgl_nikah}</h3>
            <div className="modal-2-tamu">
                <h3 className={`font-${theme.font_secondary}`}>Kepada Yth</h3>
                <h3 className={`font-${theme.font_secondary}`}>Bapak/Ibu/Saudara/Saudari</h3>
                <h2 className={`font-${theme.font_secondary}`}>{guest.nama_tamu}</h2>
                <button onClick={toggleModal}>Buka Undangan</button>
            </div>
        </div>
    )
}

export default Modal
function Modal({ toggleModal, invite, guest, theme }) {

    return (
        <div className="modal-1">
            <h3 className="modal-1-judul">Undangan pernikahan</h3>
            <div className="modal-1-nama">
                <h1 className={`font-${theme.font_primary}`}>{invite.nama_pria}</h1>
                <h1 className={`font-${theme.font_primary}`}>&</h1>
                <h1 className={`font-${theme.font_primary}`}>{invite.nama_wanita}</h1>
            </div>
            <h3>{invite.tgl_nikah}</h3>
            <div className="modal-1-tamu">
                <h3 className={`font-${theme.font_secondary}`}>Kepada Yth</h3>
                <h3 className={`font-${theme.font_secondary}`}>Bapak/Ibu/Saudara/Saudari</h3>
                <h2 className={`font-${theme.font_secondary}`}>{guest.nama_tamu}</h2>
                <button onClick={toggleModal}>Buka Undangan</button>
            </div>
        </div>
    )
}

export default Modal
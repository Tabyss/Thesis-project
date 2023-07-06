function Modal({ toggleModal, invite, guest, theme, couple }) {

    return (
        <div className="modal-2">
            <div className="bg-image">
                <img src={couple.url_foto} alt="" />
            </div>
            <h3 className={`modal-judul font-${theme.font_secondary}`}>Undangan pernikahan</h3>
            <div className="modal-nama">
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
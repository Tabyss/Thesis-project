import React, { useEffect, useState } from "react";
import axios from "axios";

function PopUp() {

  const [namaAcara, setNamaAcara] = useState("");
  const [tglAcara, setTglAcara] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [alamat, setAlamat] = useState("");
  const [linkMaps, setLinkMaps] = useState("");

  const Event = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/event", {
      nama_acara: namaAcara,
      tgl_acara: tglAcara,
      jam_mulai: jamMulai,
      jam_selesai: jamSelesai,
      alamat: alamat,
      link_maps: linkMaps,
    });
    alert("Data Berhasil Ditambah");
    window.location.reload();
  };

  return (
    <div className="tambah-acara">
      <h1>Tambah Acara</h1>
      <form className="tambah-acara-form" onSubmit={Event}>
        <div className="tambah-acara-form-input">
          <p>Nama Acara</p>
          <input type="text" placeholder="Akad Nikah" value={namaAcara} onChange={(e) => setNamaAcara(e.target.value)} />
        </div>
        <div className="tambah-acara-form-input">
          <p>Tanggal Acara</p>
          <input type="date" placeholder="12/12/2012" value={tglAcara} onChange={(e) => setTglAcara(e.target.value)} />
        </div>
        <div className="tambah-acara-form-grup">
          <div className="tambah-acara-form-input">
            <p>Mulai Acara</p>
            <input type="text" placeholder="09.00 WIB" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
            <input type="text" placeholder="12.00 WIB" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} />
          </div>
        </div>
        <div className="tambah-acara-form-input">
          <p>Alamat Acara</p>
          <input type="text" placeholder="Jl. terus aja lah" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
          <input type="text" placeholder="https://maps/" value={linkMaps} onChange={(e) => setLinkMaps(e.target.value)} />
        </div>
        <div className="tambah-acara-form-submit">
          <input type="submit" value="tambah" />
        </div>
      </form>
    </div>
  );
}

function Acara() {
  const [active, setActive] = useState(false);
  const [acara, setAcara] = useState([]);

  const getEvent = async () => {
    const response = await axios.get("http://localhost:5000/event");
    setAcara(response.data);
  }

  const deleteAcara = async (id_acara) => {
    try {
      const response = await axios.delete(`http://localhost:5000/event/${id_acara}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
    alert("Data Berhasil Dihapus");
    window.location.reload();
  }

  useEffect(() => {
    getEvent();
  }, [])

  return (
    <div className="acara">
      <div className="acara-contain">
        <h1>acara</h1>
        <div className="acara-containres">
          <table className="acara-contain-table">
            <thead className="acara-contain-table-head">
              <tr className="row">
                <th>Acara</th>
                <th>Waktu</th>
                <th>Tempat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="acara-contain-table-body">
              {acara.map((acara) => (
                <>
                  <tr className="row" key={acara.id_acara}>
                    <td>{acara.nama_acara}</td>
                    <td>{acara.tgl_acara}</td>
                    <td>{acara.alamat}</td>
                    <td>
                      <button className="delete" onClick={() => deleteAcara(acara.id_acara)}>delete</button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="acara-contain-crud">
          <div className="acara-contain-crud-button">
            <button
              onClick={() => {
                setActive(!active);
              }}
              className="acara-contain-crud-button-add"
            >
              +
            </button>
            <div className="acara-contain-crud-button-form">
              {active ? <PopUp /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acara;

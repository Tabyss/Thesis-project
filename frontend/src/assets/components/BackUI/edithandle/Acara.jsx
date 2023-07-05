import React, { useState } from "react";
import EditData from "../Elements/EditData";

function PopUp() {
  const [acara, setAcara] = useState({});
  const [formAcara, setFormAcara] = useState({
    acara: "",
    tanggal: "",
    alamat: "",
    mulai: "",
    selesai: "",
    link: "",
  });

  const handleChange = (e) => {
    let data = { ...formAcara };
    data[e.target.name] = [e.target.value];
    setFormAcara(data);
    console.log(formAcara);
  };

  const handleSubmit = (e) => {
    console.log(formAcara);
  };

  return (
    <div className="tambah-acara">
      <h1>Tambah Acara</h1>
      <form className="tambah-acara-form" onSubmit={handleSubmit}>
        <div className="tambah-acara-form-input">
          <p>Nama Acara</p>
          <input
            type="text"
            name="acara"
            onChange={handleChange}
            placeholder="Akad Nikah"
            value={formAcara.acara}
          />
        </div>
        <div className="tambah-acara-form-input">
          <p>Tanggal Acara</p>
          <input
            type="date"
            name="tanggal"
            onChange={handleChange}
            placeholder="12/12/2012"
            value={formAcara.tanggal}
          />
        </div>
        <div className="tambah-acara-form-grup">
          <div className="tambah-acara-form-input">
            <p>Mulai Acara</p>
            <input
              type="text"
              name="mulai"
              onChange={handleChange}
              placeholder="09.00 WIB"
              value={formAcara.mulai}
            />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
            <input
              type="text"
              name="selesai"
              onChange={handleChange}
              placeholder="12.00 WIB"
              value={formAcara.selesai}
            />
          </div>
        </div>
        <div className="tambah-acara-form-input">
          <p>Alamat Acara</p>
          <input
            type="text"
            name="Alamat"
            onChange={handleChange}
            placeholder="Jl. terus aja lah"
            value={formAcara.alamat}
          />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
          <input
            type="text"
            name="link"
            onChange={handleChange}
            placeholder="https://maps/"
            value={formAcara.link}
          />
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

  return (
    <div className="acara">
      <EditData id={3} />
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
              <tr className="row">
                <td>akad</td>
                <td>16.00</td>
                <td>jalan in aja dulu</td>
                <td className="action">
                  <button className="edit" onClick={()=> setActive(!active)}>edit</button>
                  <button className="delete">delete</button>
                </td>
              </tr>
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

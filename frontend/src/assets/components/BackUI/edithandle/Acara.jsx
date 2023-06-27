import React, { useState } from "react";

function PopUp() {
  return (
    <div className="tambah-acara">
      <h1>Tambah Acara</h1>
      <form className="tambah-acara-form">
        <div className="tambah-acara-form-input">
          <p>Nama Acara</p>
          <input type="text" placeholder="Akad Nikah" />
        </div>
        <div className="tambah-acara-form-input">
          <p>Tanggal Acara</p>
          <input type="date" placeholder="12/12/2012" />
        </div>
        <div className="tambah-acara-form-grup">
          <div className="tambah-acara-form-input">
            <p>Mulai Acara</p>
            <input type="text" placeholder="09.00 WIB" />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
            <input type="text" placeholder="12.00 WIB" />
          </div>
        </div>
        <div className="tambah-acara-form-input">
          <p>Alamat Acara</p>
          <input type="text" placeholder="Jl. terus aja lah" />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
          <input type="text" placeholder="https://maps/" />
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
                <td>
                  <button className="delete">delete</button>
                </td>
              </tr>
              <tr className="row">
                <td>akad</td>
                <td>16.00</td>
                <td>jalan in aja dulu</td>
                <td>
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

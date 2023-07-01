import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

function TamuValid({ status, name }) {
  function Already() {
    return (
      <div className="popup">
        <div className="popup-contain">
          <BsFillCheckCircleFill className="popup-contain-check" />
          <h2>{name}</h2>
          <h1>Sudah Mengisi Buku Tamu</h1>
        </div>
      </div>
    );
  }

  function Done() {
    return (
      <div className="popup">
        <div className="popup-contain">
          <BsFillCheckCircleFill className="popup-contain-check" />
          <h1>Selamat Datang</h1>
          <p>kepada</p>
          <h2>{name}</h2>
        </div>
      </div>
    );
  }

  function Wrong() {
    return (
      <div className="popup">
        <div className="popup-contain">
          <BsFillCheckCircleFill className="popup-contain-check" />
          <h1>Maaf</h1>
          <h2>Anda Tidak Terdaftar</h2>
        </div>
      </div>
    );
  }

  return status ?  <Already /> : <Done />;
}

export default TamuValid;

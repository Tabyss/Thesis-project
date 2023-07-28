import React from "react";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";

export default function TamuValid({ status, name }) {
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
<<<<<<< HEAD
<<<<<<< HEAD
          <h2>{name}</h2>
=======
>>>>>>> f31f7f6 (change validation)
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
        </div>
      </div>
    );
  }

  // Menambahkan kondisi untuk menangani situasi ketika data salah atau tidak termasuk
  return status ? <Already /> : <Done />;
}

export function Wrong() {
  return (
    <div className="popup">
      <div className="popup-contain-wrong">
        <BsFillXCircleFill className="popup-contain-wrong-icon" />
        <h1>Maaf</h1>
        <h2>Anda Tidak Terdaftar</h2>
      </div>
    </div>
  );
}

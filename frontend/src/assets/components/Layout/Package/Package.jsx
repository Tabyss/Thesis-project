import React from "react";
import "./package.scss";
import { tawaran } from "../../../../PaketHarga";
import { BsCheckLg } from "react-icons/bs";

function Package() {
  return (
    <div className="package">
      <div className="package-title">
        <h1>pilih paket</h1>
      </div>
      <span className="package-background"></span>
      <div className="package-content">
        {tawaran.map((list, i) => {
          return (
            <div
              key={i}
              className={
                "package-content-main " +
                (list.category === "popular"
                  ? "popular"
                  : list.category === "exclusive"
                  ? "exclusive"
                  : "")
              }
            >
              <h4>{list.category}</h4>
              <div className="package-content-main-hold">
                <h2>{list.title}</h2>
                <div className="package-content-main-hold-tawar">
                  <i>{list.awal}</i>
                  <p>Diskon {list.disc}</p>
                </div>
                <h3>{list.akhir}</h3>
                <button>pesan sekarang</button>
                <div className="package-content-main-hold-list">
                  {list.fitur?.map((tur, i) => {
                    return (
                      <li key={i}>
                        <BsCheckLg />
                        {tur}
                      </li>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Package;

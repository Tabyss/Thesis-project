import React from "react";
import {BsQrCodeScan} from "react-icons/bs"

function Insight() {
  return (
    <div className="insight">
      <div className="insight-menu">
        <h1>Insight</h1>
        <div className="insight-menu-main">
          <div className="insight-menu-main-card">
            <div className="value">
              <h2>120</h2>
              <h3>orang</h3>
            </div>
            <p>Tamu Yang datang</p>
            <a>See More</a>
          </div>
          <div className="insight-menu-main-card">
            <div className="value">
              <h2>120</h2>
              <h3>orang</h3>
            </div>
            <p>Memberi Amplop</p>
            <a>See More</a>
          </div>
          <div className="insight-menu-main-card">
            <div className="value">
              <h2>120</h2>
              <h3>orang</h3>
            </div>
            <p>Memberi Ucapan</p>
            <a>See More</a>
          </div>
        </div>
      </div>
      <div className="insight-add">
        <div className="insight-add-scan">
            <BsQrCodeScan/>
        </div>
        <div className="insight-add-done">
            <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Insight;

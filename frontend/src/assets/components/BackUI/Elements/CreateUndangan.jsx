import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tawaran } from "../../../../PaketHarga";

const Payline = [
  {
    id: 1,
    path: "Tambah Paket",
  },
  {
    id: 2,
    path: "Pembayaran",
  },
  {
    id: 3,
    path: "Selesai",
  },
];

function CreateUndangan() {
  const [getId, setGetId] = useState("1");
  const [namePria, setNamePria] = useState('');
  const [nameWanita, setNameWanita] = useState('');
  const [tglNikah, setTglNikah] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const handleLine = (e) => {
    setGetId(e.target.id);
    console.log(getId);
  };

  const Create = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/invite',{
        name_pria: namePria,
        name_wanita: nameWanita,
        tgl_nikah: tglNikah,
        url: url
      });
      navigate("/edit");
    } catch (error) {
      if(error.response) {
        // console.log(error.response.data.msg);
        setMsg(error.response.data.msg);
      }
    }
  }

  return (
    <div className="create">
      <div className="create-contain">
        <form onSubmit={ Create }>
          <h1>1. pilih paket undangan</h1>
          <h5>silahkan pilih paket sesuai fitur yang ada</h5>
          <div className="create-contain-card">
            {tawaran.map((pack, i) => (
              <div className="create-contain-card-option" key={i}>
                <input
                  className="radio-button"
                  type="radio"
                  name="package"
                  value={pack.id}
                />
                <div className="radio-value">
                  <h2>{pack.title}</h2>
                  <div className="radio-disc">
                    <p>Rp {pack.awal}</p>
                    <h4>Diskon {pack.disc}</h4>
                  </div>
                  <h3>{pack.akhir}</h3>
                  <div className="radio-fitur">
                    {pack.fitur?.map((fitur) => (
                      <li>{fitur}</li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1>2. Url Undangan</h1>
          <h5>Silahkan Isi Url Undangan Sesuai Keinginan Anda</h5>
          <div className="create-contain-url">
            <h4>Url Domain Undangan</h4>
            <input
              type="text"
              className="inputan"
              placeholder="www.kartunikah.com/hanan-ataki"
              value={url} onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <h1>3. Data Mempelai</h1>
          <h5>Silahkan Isi Data Undangan Sesuai Keinginan Anda</h5>
          <div className="create-contain-mempelai">
            <div className="data-undangan">
              <h4>Mempelai Pria</h4>
              <input type="text" className="inputan" placeholder="Hanan" value={namePria} onChange={(e) => setNamePria(e.target.value)}/>
            </div>
            <div className="data-undangan">
              <h4>Mempelai Wanita</h4>
              <input type="text" className="inputan" placeholder="Hanan" value={nameWanita} onChange={(e) => setNameWanita(e.target.value)}/>
            </div>
            <div className="data-undangan">
              <h4>Tanggal Akad Nikah</h4>
              <input type="date" className="inputan" placeholder="Hanan" value={tglNikah} onChange={(e) => setTglNikah(e.target.value)}/>
            </div>
            <div className="data-undangan">
              <h4>No. Telpon</h4>
              <input type="text" className="inputan" placeholder="Hanan" />
            </div>
          </div>
          <button className="create-payment-pay-button">Buat Undangan</button>
        </form>
      </div>
      <div className="create-payment">
        <div className="create-payment-item">
          <ul className="create-payment-item-btn">
            {Payline.map((line, index) => (
              <li
                key={line.id}
                onClick={handleLine}
                id={line.id}
                className={getId == line.id ? "active" : null}
              >
                <p onClick={handleLine} id={line.id}>
                  {index + 1}
                </p>
                {line.path}
              </li>
            ))}
          </ul>
        </div>
        <div className="create-payment-pay">
          <div className="create-payment-pay-item">
            <p>Paket Bronze</p>
            <p>Rp 200000</p>
          </div>
          <div className="create-payment-pay-item">
            <p>discount</p>
            <p>Rp 200000</p>
          </div>
          <span className="create-payment-pay-line"></span>
          <div className="create-payment-pay-total">
            <p>Total</p>
            <h2>Rp 123039</h2>
          </div>
          <div className="create-payment-pay-kode">
            <p>Kode Referral</p>
            <input type="text" className="inputan" placeholder="913813029" />
          </div>
          <button className="create-payment-pay-button">Buat Undangan</button>
        </div>
      </div>
    </div>
  );
}

export default CreateUndangan;

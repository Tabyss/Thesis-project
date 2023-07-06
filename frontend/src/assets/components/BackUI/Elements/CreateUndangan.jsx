import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { tawaran } from "../../../../PaketHarga";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import HashGenerator from "../Handler/HashGenerator";

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
  const [namaPria, setNamaPria] = useState("");
  const [namaWanita, setNamaWanita] = useState("");
  const [tglNikah, setTglNikah] = useState("");
  const [url, setUrl] = useState("");
  const [harga, setHarga] = useState(0);
  const [disc, setDisc] = useState(20000);
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const handleLine = (e) => {
    setGetId(e.target.id);
    console.log(getId);
  };

  const handlePay = (e) => {
    setHarga(e.target.id);
  };

  const Create = async (e) => {
    e.preventDefault();
    try {
      const id = HashGenerator(5);
      await axios.post("http://localhost:5000/invite", {
        id,
        nama_pria: namaPria,
        nama_wanita: namaWanita,
        tgl_nikah: tglNikah,
        url_undangan: url,
        id_user: user.id
      });
      navigate(`/dashboard/${user.id}`);
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.msg);
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="create">
      <form onSubmit={Create} className="create-contain">
        <p>{msg}</p>
        <div className="create-contain-form">
          <h1>1. pilih paket undangan</h1>
          <h5>silahkan pilih paket sesuai fitur yang ada</h5>
          <div className="create-contain-form-card">
            {tawaran.map((pack, i) => (
              <div className="create-contain-form-card-option" key={i}>
                <input
                  className="radio-button"
                  type="radio"
                  name="package"
                  value={pack.id}
                  id={pack.num}
                  onClick={handlePay}
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
          <div className="create-contain-form-url">
            <h4>Url Domain Undangan</h4>
            <input
              type="text"
              className="inputan"
              placeholder="www.kartunikah.com/hanan-ataki"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <h1>3. Data Mempelai</h1>
          <h5>Silahkan Isi Data Undangan Sesuai Keinginan Anda</h5>
          <div className="create-contain-form-mempelai">
            <div className="data-undangan">
              <h4>Mempelai Pria</h4>
              <input
                type="text"
                className="inputan"
                placeholder="Hanan"
                value={namaPria}
                onChange={(e) => setNamaPria(e.target.value)}
                required
              />
            </div>
            <div className="data-undangan">
              <h4>Mempelai Wanita</h4>
              <input
                type="text"
                className="inputan"
                placeholder="Hanan"
                value={namaWanita}
                onChange={(e) => setNamaWanita(e.target.value)}
                required
              />
            </div>
            <div className="data-undangan">
              <h4>Tanggal Akad Nikah</h4>
              <input
                type="date"
                className="inputan"
                placeholder="Hanan"
                value={tglNikah}
                onChange={(e) => setTglNikah(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="create-contain-payment">
          <div className="create-contain-payment-item">
            <ul className="create-contain-payment-item-btn">
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
          <div className="create-contain-payment-pay">
            <div className="create-contain-payment-pay-item">
              <p>Paket Bronze</p>
              <p>Rp {harga}</p>
            </div>
            <div className="create-contain-payment-pay-item">
              <p>discount</p>
              <p>Rp {disc}</p>
            </div>
            <span className="create-contain-payment-pay-line"></span>
            <div className="create-contain-payment-pay-total">
              <p>Total</p>
              <h2>Rp {harga - disc}</h2>
            </div>
            <button className="create-contain-payment-pay-button">
              Buat Undangan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUndangan;
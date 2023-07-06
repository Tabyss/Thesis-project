import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import EditData from "../Elements/EditData";

function PopUp() {

  const [namaAcara, setNamaAcara] = useState("");
  const [tglAcara, setTglAcara] = useState("");
  const [jamMulai, setJamMulai] = useState("");
  const [jamSelesai, setJamSelesai] = useState("");
  const [alamat, setAlamat] = useState("");
  const [linkMaps, setLinkMaps] = useState("");
  const { id_undangan } = useParams();
  const [idUndangan, setIdUndangan] = useState("");

  useEffect(() => {
    setIdUndangan(id_undangan);
  }, [id_undangan]);

  const Event = async (e) => {
    const fetchEvent = async () => {
      const response = await axios.get(`http://localhost:5000/event/${id_undangan}`);
      return response.data;
    }

    e.preventDefault();
    await axios.post("http://localhost:5000/event", {
      nama_acara: namaAcara,
      tgl_acara: tglAcara,
      jam_mulai: jamMulai,
      jam_selesai: jamSelesai,
      alamat: alamat,
      link_maps: linkMaps,
      id_undangan: idUndangan,
    });
    alert("Data Berhasil Ditambah");
<<<<<<< HEAD
    window.location.reload();
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
>>>>>>> bb43b2c (add login middleware, connect frontend)
  };

  return (
    <div className="tambah-acara">
      <h1>Tambah Acara</h1>
      <form className="tambah-acara-form" onSubmit={Event}>
        <div className="tambah-acara-form-input">
          <p>Nama Acara</p>
          <input type="text" placeholder="Akad Nikah" value={namaAcara} onChange={(e) => setNamaAcara(e.target.value)} required />
        </div>
        <div className="tambah-acara-form-input">
          <p>Tanggal Acara</p>
<<<<<<< HEAD
          <input type="date" placeholder="12/12/2012" value={tglAcara} onChange={(e) => setTglAcara(e.target.value)} />
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
          <input type="date" placeholder="12/12/2012" value={tglAcara} onChange={(e) => setTglAcara(e.target.value)} required />
>>>>>>> bb43b2c (add login middleware, connect frontend)
        </div>
        <div className="tambah-acara-form-grup">
          <div className="tambah-acara-form-input">
            <p>Mulai Acara</p>
            <input type="text" placeholder="09.00 WIB" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} required />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
<<<<<<< HEAD
            <input
              type="text"
              name="selesai"
              onChange={handleChange}
              placeholder="12.00 WIB"
              value={formAcara.selesai}
            />
=======
            <input type="text" placeholder="09.00 WIB" value={jamMulai} onChange={(e) => setJamMulai(e.target.value)} />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
            <input type="text" placeholder="12.00 WIB" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} />
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
            <input type="text" placeholder="12.00 WIB" value={jamSelesai} onChange={(e) => setJamSelesai(e.target.value)} required />
>>>>>>> bb43b2c (add login middleware, connect frontend)
          </div>
        </div>
        <div className="tambah-acara-form-input">
          <p>Alamat Acara</p>
          <input type="text" placeholder="Jl. terus aja lah" value={alamat} onChange={(e) => setAlamat(e.target.value)} required />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
<<<<<<< HEAD
          <input
            type="text"
            name="link"
            onChange={handleChange}
            placeholder="https://maps/"
            value={formAcara.link}
          />
=======
          <input type="text" placeholder="Jl. terus aja lah" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
          <input type="text" placeholder="https://maps/" value={linkMaps} onChange={(e) => setLinkMaps(e.target.value)} />
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
          <input type="text" placeholder="https://maps/" value={linkMaps} onChange={(e) => setLinkMaps(e.target.value)} required />
>>>>>>> bb43b2c (add login middleware, connect frontend)
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
  // const [acara, setAcara] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const getEvent = async () => {
    const response = await axios.get("http://localhost:5000/event");
    return response.data;
  }

  const { data } = useSWR("event", getEvent, { refreshInterval: 100 });
  console.log(data);

  const deleteAcara = async (id_acara) => {
    try {
      const response = await axios.delete(`http://localhost:5000/event/${id_acara}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getEvent();
  }, [])

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
              {data &&
                data.map((acara) => (
                  <tr className="row" key={acara.id_acara}>
                    <td>{acara.nama_acara}</td>
                    <td>{acara.tgl_acara}</td>
                    <td>{acara.alamat}</td>
                    <td className="action">
                      <button className="edit" onClick={() => setActive(!active)}>edit</button>
                      <button className="delete" onClick={() => deleteAcara(acara.id_acara)}>delete</button>
                    </td>
                  </tr>
<<<<<<< HEAD
                </>
              ))}
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
                ))}
>>>>>>> bb43b2c (add login middleware, connect frontend)
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

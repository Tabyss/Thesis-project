import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import EditData from "../Elements/EditData";

function PopUp({ idAcara }) {
  const { id_undangan } = useParams();
  const [idUndangan, setIdUndangan] = useState(id_undangan);
  const [id, setId] = useState("");

  const [formAcara, setFormAcara] = useState({
    nama: "",
    tanggal: "",
    mulai: "",
    selesai: "",
    alamat: "",
    link: "",
  });

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/event/${idAcara}`
        );
        return setFormAcara({
          nama: response.data.nama_acara,
          tanggal: response.data.tgl_acara,
          mulai: response.data.jam_mulai,
          selesai: response.data.jam_selesai,
          alamat: response.data.alamat,
          link: response.data.link_maps,
        });
      } catch (error) {
        console.log(error);
      }
    };
    handleGet();
    console.log(idAcara);
  }, [idAcara]);

  console.log(formAcara);

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
  const handleChange = (e) => {
    let data = { ...formAcara };
    data[e.target.name] = e.target.value;
    setFormAcara(data);
<<<<<<< HEAD
    console.log(formAcara);
=======
<<<<<<< HEAD
    console.log(formAcara);
>>>>>>> 8005205 (fix bug)
=======
>>>>>>> 8547a02 (add handle update)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (idAcara !== "") {
      await axios.patch(`http://localhost:5000/event/${idAcara}`, {
        nama_acara: formAcara.nama,
        tgl_acara: formAcara.tanggal,
        jam_mulai: formAcara.mulai,
        jam_selesai: formAcara.selesai,
        alamat: formAcara.alamat,
        link_maps: formAcara.link,
        id_undangan: idUndangan,
      });
      alert("Data Berhasil Ditambah");
    } else {
      await axios.post("http://localhost:5000/event", {
        nama_acara: formAcara.nama,
        tgl_acara: formAcara.tanggal,
        jam_mulai: formAcara.mulai,
        jam_selesai: formAcara.selesai,
        alamat: formAcara.alamat,
        link_maps: formAcara.link,
        id_undangan: idUndangan,
      });
      alert("Data Berhasil Ditambah");
    }
    setFormAcara({
      nama: "",
      tanggal: "",
      mulai: "",
      selesai: "",
      alamat: "",
      link: "",
    });
  };

  return (
    <div className="tambah-acara">
      <h1>Tambah Acara</h1>
      <form className="tambah-acara-form" onSubmit={handleSubmit}>
        <div className="tambah-acara-form-input">
          <p>Nama Acara</p>
          <input
            type="text"
            name="nama"
            onChange={handleChange}
            value={formAcara.nama}
            placeholder="Akad Nikah"
            required
          />
        </div>
        <div className="tambah-acara-form-input">
          <p>Tanggal Acara</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <input type="date" placeholder="12/12/2012" value={tglAcara} onChange={(e) => setTglAcara(e.target.value)} />
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
          <input type="date" placeholder="12/12/2012" value={tglAcara} onChange={(e) => setTglAcara(e.target.value)} required />
>>>>>>> bb43b2c (add login middleware, connect frontend)
=======
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
          <input
            type="date"
            name="tanggal"
            onChange={handleChange}
            value={formAcara.tanggal}
            placeholder="12/12/2012"
            required
          />
<<<<<<< HEAD
=======
>>>>>>> 8005205 (fix bug)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
        </div>
        <div className="tambah-acara-form-grup">
          <div className="tambah-acara-form-input">
            <p>Mulai Acara</p>
            <input
              type="text"
              name="mulai"
              onChange={handleChange}
              value={formAcara.mulai}
              placeholder="09.00 WIB"
              required
            />
          </div>
          <div className="tambah-acara-form-input">
            <p>Selesai Acara</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8005205 (fix bug)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
            <input
              type="text"
              name="selesai"
              onChange={handleChange}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
              placeholder="12.00 WIB"
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
              value={formAcara.selesai}
              placeholder="12.00 WIB"
              required
            />
<<<<<<< HEAD
=======
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
=======
              value={formAcara.selesai}
              placeholder="12.00 WIB"
              required
            />
>>>>>>> 8005205 (fix bug)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
          </div>
        </div>
        <div className="tambah-acara-form-input">
          <p>Alamat Acara</p>
          <input
            type="text"
            name="alamat"
            onChange={handleChange}
            value={formAcara.alamat}
            placeholder="Jl. terus aja lah"
            required
          />
        </div>
        <div className="tambah-acara-form-input">
          <p>Link Acara</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8005205 (fix bug)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
          <input
            type="text"
            name="link"
            onChange={handleChange}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
            placeholder="https://maps/"
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
            value={formAcara.link}
            placeholder="https://maps/"
            required
          />
<<<<<<< HEAD
=======
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
=======
            value={formAcara.link}
            placeholder="https://maps/"
            required
          />
>>>>>>> 8005205 (fix bug)
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
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
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id_undangan } = useParams();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const getEvent = async () => {
    const response = await axios.get(`http://localhost:5000/acara/${id_undangan}`);
    return response.data;
  };

  const editEvent = (e) => {
    setId(e.target.name);
    setActive(true);
  };

  const { data } = useSWR("acara", getEvent, { refreshInterval: 100 });

  const deleteAcara = async (id_acara) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/event/${id_acara}`
      );
      alert("Data Berhasil Dihapus");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="acara">
      <EditData id={3} />
      <div className="acara-contain">
        <h1>acara</h1>
        <div className="acara-containres">
          <table className="acara-contain-table">
            <thead className="acara-contain-table-head">
              <tr className="row">
                <th>No</th>
                <th>Acara</th>
                <th>Waktu</th>
                <th>Tempat</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="acara-contain-table-body">
              {data &&
                data.map((acara, index) => (
                  <tr className="row" key={acara.id_acara}>
                    <td id={index + 1}>{index + 1}</td>
                    <td>{acara.nama_acara}</td>
                    <td>{acara.tgl_acara}</td>
                    <td>{acara.alamat}</td>
                    <td className="action">
                      <button
                        className="edit"
                        name={acara.id_acara}
                        onClick={editEvent}
                      >
                        edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => deleteAcara(acara.id_acara)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
<<<<<<< HEAD
                ))}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                </>
              ))}
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
                ))}
>>>>>>> bb43b2c (add login middleware, connect frontend)
=======
                ))}
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
            </tbody>
          </table>
        </div>
        <div className="acara-contain-crud">
          <div className="acara-contain-crud-button">
            <button
              onClick={() => {
                setActive(!active);
                setId("");
              }}
              className="acara-contain-crud-button-add"
            >
              +
            </button>
            <div className="acara-contain-crud-button-form">
              {active ? <PopUp idAcara={id} /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="acara-next">
        <Link to={`/edit/4/${id_undangan}`} className="mempelai-next-button">
          Next
        </Link>
      </div>
    </div>
  );
}

export default Acara;

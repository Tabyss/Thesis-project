
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { BsPlus, BsQrCodeScan, BsArrowLeft } from "react-icons/bs";
import HashGenerator from "../Handler/HashGenerator";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";

function AddTamu({ tamu, invite, onTamuAdded }) {
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("+62");
  const [alamat, setAlamat] = useState("");
  const [idTamu, setIdTamu] = useState("");
  const [qrcode, setQrcode] = useState(`${invite}-${tamu}`);

  const addTamu = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tamu", {
      id_tamu: tamu,
      nama_tamu: name,
      no_telp: parseInt(telp),
      alamat: alamat,
      qrcode: qrcode, // id_undangan + id_tamu
      id_undangan: invite,
    });
    form.reset();
    setIdTamu(HashGenerator(15));
  };

  return (
    <>
      <form id="form" onSubmit={addTamu} className="form">
        <div className="form-value">
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="form-value">
          <label>Nomor Telpon</label>
          <input
            value={telp}
            onChange={(e) => {
              setTelp(e.target.value);
            }}
            type="tel"
            required
          ></input>
        </div>
        <div className="form-value">
          <label>Alamat</label>
          <input
            value={alamat}
            onChange={(e) => {
              setAlamat(e.target.value);
            }}
            required
          ></input>
        </div>
        <input type="submit" className="submit"></input>
      </form>
    </>
  );
}

function TamuList() {
  const { mutate } = useSWRConfig();
  const [click, setClick] = useState(false);
  const [idtamu, setIdTamu] = useState("");
  const [idUser, setIdUser] = useState("");
  const [undangan, setUndangan] = useState("");
  const [invite, setInvite] = useState("");
  const [theme, setTheme] = useState("");
  const [id, setId] = useState("");
  const { id_undangan } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    const fetchInvite = async (id) => {
      const response = await axios.get(`http://localhost:5000/invite/${id}`);
      setInvite(response.data);
      setIdUser(response.data.id_user);
    };
    const fetchTheme = async () => {
      const response = await axios.get(`http://localhost:5000/tema/${id_undangan}`);
      setTheme(response.data);
      if (!response.data) {
        navigate(`/dashboard/${user.id}`);
        return alert("Silahkan Buat Undangan Terlebih Dahulu");
      }
    }

    fetchTheme(id_undangan);
    fetchInvite(id);
  }, [id, id_undangan]);

  const fetch = async () => {
    const response = await axios.get(`http://localhost:5000/guest/${id_undangan}`);
    setId(response.data[0].id_undangan);
    return response.data;
  };

  const { data } = useSWR("guest", fetch, { refreshInterval: 100 });
  // if (!data) return <h2>Loading...</h2>;

  const deleteTamu = async (tamuId) => {
    await axios.delete(`http://localhost:5000/tamu/${tamuId}`);
    mutate("tamu");
  };

  const handleCopyLink = (id_tamu) => {
    const inviteLink = window.location.origin + `/invitation/${invite.url_undangan}/${id_tamu}`;
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Pesan sukses akan hilang setelah 2 detik
    });
  };

  const handleAdd = () => {
    setClick(!click);
    setIdTamu(HashGenerator(15));
  };

  return (
    <div className={`view-tamu theme-${theme.tema_undangan}`}>
      <div className="view-tamu-menu">
        <Link to={`/dashboard/${idUser}`} className="back">
          <BsArrowLeft />
        </Link>
        <h2>List Tamu</h2>
        <button onClick={handleAdd} className="add">
          <BsPlus /><p>Add</p>
        </button>
        <Link to={`/scan/${id_undangan}`} className="scanner">
          <BsQrCodeScan />
        </Link>
      </div>
      {click && <AddTamu tamu={idtamu} invite={id_undangan} />}
      <div className="view-tamu-table">
      {copySuccess && <p className="copy-success">Link copied to clipboard!</p>}
        <table className="table">
          <thead className="table-head">
            <tr className="table-head-contain">
              <th>No</th>
              <th>Nama Tamu</th>
              <th>Nomor Telpon</th>
              <th>Alamat</th>
              <th>Undangan</th>
              <th>Status</th>
              <th>Jam Hadir</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data && data.map((tamu, index) => {
              const urlUndangan = `/invitation/${invite.url_undangan}/${tamu.id_tamu}`;
              const urlPrint = `/print/${invite.url_undangan}/${tamu.id_tamu}`;

              return (
                <tr key={tamu.id} className="table-body-contain">
                  <td>{index + 1}</td>
                  <td>{tamu.nama_tamu}</td>
                  <td>{tamu.no_telp}</td>
                  <td>{tamu.alamat}</td>
                  <td>
                    <Link to={urlUndangan}>
                      <button className="view">View</button>
                    </Link>
                    <Link to={urlPrint}>
                      <button className="download">Download</button>
                    </Link>
                    <button onClick={() => handleCopyLink(tamu.id_tamu)} className="copy">
                      Copy Link
                    </button>
                  </td>
                  <td>
                    <p className={tamu.status ? "hadir" : "tidak-hadir"}>
                      {tamu.status ? "Hadir" : "Tidak Hadir"}
                    </p>
                  </td>
                  <td className="gap">{tamu.status ? tamu.w_hadir : null}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteTamu(tamu.id_tamu);
                      }}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TamuList;

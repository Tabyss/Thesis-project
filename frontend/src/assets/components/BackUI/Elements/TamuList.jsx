
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { BsPlus, BsQrCodeScan } from "react-icons/bs";
import QRCode from "qrcode.react";
import HashGenerator from "../Handler/HashGenerator";

function AddTamu({ tamu, invite }) {
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");
  const [alamat, setAlamat] = useState("");
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
  };
  console.log(invite)

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
  const [idtamu, setIdTamu] = useState("")
  const [undangan, setUndangan] = useState("");
  const { id_undangan } = useParams();

  const fetch = async () => {
    const response = await axios.get(`http://localhost:5000/guest/${id_undangan}`);
    return response.data;
  };

  const { data } = useSWR("tamu", fetch, { refreshInterval: 100 });
  if (!data) return <h2>Loading...</h2>;

  const deleteTamu = async (tamuId) => {
    await axios.delete(`http://localhost:5000/tamu/${tamuId}`);
    mutate("tamu");
  };

  const handleAdd = () => {
    setClick(!click);
    setIdTamu(HashGenerator(15))
  };

  return (
    <div className="view-tamu">
      <div className="view-tamu-menu">
        <button onClick={handleAdd} className="add">
          <BsPlus />
        </button>
        <Link to={`/scan/${id_undangan}`} className="scanner">
          <BsQrCodeScan />
        </Link>
      </div>
      {click && <AddTamu tamu={idtamu} invite={id_undangan} />}
      <div className="view-tamu-table">
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
            {data.map((tamu, index) => (
              <tr key={tamu.id} className="table-body-contain">
                <td>{index + 1}</td>
                <td>{tamu.nama_tamu}</td>
                <td>{tamu.no_telp}</td>
                <td>{tamu.alamat}</td>
                <td>
                  <QRCode value={tamu.qrcode} />
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TamuList;

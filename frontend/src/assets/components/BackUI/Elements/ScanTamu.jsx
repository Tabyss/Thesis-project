import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../Index.scss";
import useSWR, { useSWRConfig } from "swr";
import { QrReader } from "react-qr-reader";
import { GetHour } from "../Handler/DateConvert";
import TamuValid from "../Handler/TamuValid";
import {BiRefresh} from "react-icons/bi"

function DaftarTamu() {
  const [click, setClick] = useState(false);

  const fetch = async () => {
    const response = await axios.get("http://localhost:5000/tamu");
    return response.data;
  };

  const { data } = useSWR("tamu", fetch, { refreshInterval: 100 });
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="view-tamu">
      <div className="view-tamu-add">{click ? <AddTamu /> : null}</div>
      <div className="view-tamu-table">
        <table className="table">
          <thead className="table-head">
            <tr className="table-head-contain">
              <th>No</th>
              <th>Nama Tamu</th>
              <th>Nomor Telpon</th>
              <th>Status</th>
              <th>Jam Hadir</th>
            </tr>
          </thead>
          {data.map((tamu, index) => (
            <tbody className="table-body" key={index}>
              {tamu.status ? (
                <tr key={tamu.id} className="table-body-contain">
                  <td>{index + 1}</td>
                  <td>{tamu.nama_tamu}</td>
                  <td>{tamu.no_telp}</td>
                  <td>
                    <p className={tamu.status ? "hadir" : "tidak-hadir"}>
                      {tamu.status ? "Hadir" : "Tidak Hadir"}
                    </p>
                  </td>
                  <td className="gap">{GetHour(tamu.updateAt, "full")}</td>
                </tr>
              ) : null}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

function ScanTamu() {
  const [id, setId] = useState("");
  const [status, setStatus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [getId, setGetId] = useState({});
  const handleRefresh = () => {
    window.location.reload();
  };

  const editTamu = async () => {
    // e.preventDefault();
    if (id !== "") {
      // console.log(id);
      setStatus(true);
      await axios.patch(`http://localhost:5000/tamu/${id}`, {
        status: status,
      });
    } else {
      null;
    }
  };

  const getGuest = async () => {
    if (status) {
      try {
        const guest = await axios.get(`http://localhost:5000/tamu/${id}`, {});
        setGetId(guest.data);
      } catch (error) {}
    } else {
      null;
    }
  };
  console.log(getId);
  useEffect(
    () => {
      editTamu();
      if (showPopup) {
        const timer = setTimeout(() => {
          setShowPopup(false);
          getGuest();
        }, 3000); // Ganti nilai 3000 dengan durasi yang diinginkan dalam milidetik (misalnya 3000 untuk 3 detik)
        return () => clearTimeout(timer);
      }
    },
    [editTamu],
    [showPopup]
  );

  function getValue(result, error) {
    if (!!result) {
      setId(result?.text);
      setShowPopup(true);
      console.log(result?.text);
    }
  }

  return (
    <div className="scan">
      <div className="scan-qr">
        {showPopup && <TamuValid status={getId.status} name={getId.nama_tamu} />}
        <QrReader
          className="scan-qr-han"
          onResult={getValue}
          style={{ width: "50%" }}
        />
        <button className="scan-qr-fresh" onClick={handleRefresh}><BiRefresh/></button>
      </div>
      <div className="scan-daftar">
        <DaftarTamu />
      </div>
    </div>
  );
}

export default ScanTamu;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../../Index.scss";
import useSWR, { useSWRConfig } from "swr";
import { QrReader } from "react-qr-reader";
import { GetHour } from "../Handler/DateConvert";

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
                  <td>{tamu.name}</td>
                  <td>{tamu.no_telp}</td>
                  <td>
                    <p className={tamu.status ? "hadir" : "tidak-hadir"}>
                      {tamu.status ? "Hadir" : "Tidak Hadir"}
                    </p>
                  </td>
                  <td className="gap">
                    {GetHour(tamu.updateAt, "full")}
                  </td>
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
  const [guest, setGuest] = useState('');
  const [popupType, setPopupType] = useState(null);

  const fetchGuest = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/tamu/${id}`);
      setGuest(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  const editTamu = async () => {
    if (id !== "") {
      setStatus(true);
      await axios.patch(`http://localhost:5000/tamu/${id}`, {
        status: status,
      });
    }
  };

  useEffect(() => {
    editTamu();
    fetchGuest(id);
  }, []);

  function getValue(result, error) {
    if (!!result) {
      const scannedId = result?.text;
      const isDataExists = data.some((tamu) => tamu.id === scannedId);

      if (isDataExists) {
        setId(scannedId);
        setPopupType("success");
      } else {
        setPopupType("invalid");
      }
    }
  }

  useEffect(() => {
    if (popupType === "success") {
      const timer = setTimeout(() => {
        setPopupType(null);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (popupType === "invalid") {
      const timer = setTimeout(() => {
        setPopupType(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [popupType]);

  const renderPopup = () => {
    switch (popupType) {
      case "success":
        return <div className="popup">QR code berhasil discan!</div>;
      case "invalid":
        return <div className="popup">Data QR code tidak ditemukan.</div>;
      case "alreadyPresent":
        return <div className="popup">Anda telah melakukan presensi dengan QR code ini.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="scan">
      <div className="scan-qr">
        <QrReader onResult={getValue} style={{ width: "100%" }} />
      </div>
      <div className="scan-daftar">
        <DaftarTamu />
        <button onClick={handleRefresh}>Refresh</button>
      </div>
      {renderPopup()}
    </div>
  );
}


export default ScanTamu;

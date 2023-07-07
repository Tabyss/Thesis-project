import React, { useEffect, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { QrReader } from "react-qr-reader";
import { GetHour } from "../Handler/DateConvert";
import { BiRefresh, BiFullscreen, BiExitFullscreen } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TamuValid, { Wrong } from "../Handler/TamuValid";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
// import "../../../../Index.scss";
import "../Style/Scan.scss";

function DaftarTamu() {
  const [click, setClick] = useState(false);
  const { id_undangan } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const fetch = async () => {
    const response = await axios.get(
      `http://localhost:5000/guest/${id_undangan}`
    );
    return response.data;
  };

  const { data } = useSWR("tamu", fetch, { refreshInterval: 100 });
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="scan-daftar">
      <div className="scan-daftar-table">
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
  const [wrongPopup, setWrongPopup] = useState(false);
  const [theme, setTheme] = useState("");
  const [getId, setGetId] = useState({});
  const { id_undangan } = useParams();
  const [active, setActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);


  const handleRefresh = () => {
    window.location.reload();
  };

  const editTamu = async () => {
    if (id !== "") {
      setStatus(true);
      await axios.patch(`http://localhost:5000/tamu/${id}`, {
        status: status,
      });
    } else {
      null;
    }
  };

  useEffect(() => {
    const handleGet = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/tema/${id_undangan}`
        );
        return setTheme(response.data.tema_undangan);
      } catch (error) {
        console.log(error);
      }
    };
    handleGet();
  }, [id_undangan]);

  const getGuest = async () => {
    if (status) {
      try {
        const guest = await axios.get(
          `http://localhost:5000/guest/${id_undangan}`,
          {}
        );
        setGetId(guest.data);
      } catch (error) {}
    } else {
      null;
    }
  };
  useEffect(
    () => {
      editTamu();
      if (showPopup) {
        const timer = setTimeout(() => {
          setShowPopup(false);
          setWrongPopup(false);
          getGuest();
          setId("");
        }, 3000); // Ganti nilai 3000 dengan durasi yang diinginkan dalam milidetik (misalnya 3000 untuk 3 detik)
        return () => clearTimeout(timer);
      }
    },
    [editTamu],
    [showPopup]
  );

  function getValue(result, error) {
    if (!!result) {
      setShowPopup(!false);
      //validasi tamu
      if (result?.text.substring(0, id_undangan.length) === id_undangan) {
        let length = id_undangan.length;
        let Idtamu = result?.text.substring(length + 1);
        setId(Idtamu);
      } else {
        setWrongPopup(!false);
      }
      console.log(result?.text);
    }
  }


  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.getElementById('scan-qr');
    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  return (
    <div id="scan" className={`theme-${theme}`}>
      <div className="scan">
        <div className="scan-qr">
          <h1>Daftar Hadir</h1>
          {showPopup ? (
            wrongPopup ? (
              <Wrong />
            ) : (
              <TamuValid status={getId.status} name={getId.nama_tamu} />
            )
          ) : null}
          <QrReader
            className="scan-qr-han"
            onResult={getValue}
            style={{ width: "50%" }}
          />
        </div>
        <div className="scan-daftar">
          <div className="scan-daftar-button">
            <button className="fresh" onClick={handleRefresh}>
              <BiRefresh />
            </button>
            <button className="full" onClick={toggleFullscreen}>
              {active ? <BiExitFullscreen /> : <BiFullscreen />}
            </button>
          </div>
          <DaftarTamu />
        </div>
      </div>
    </div>
  );
}

export default ScanTamu;

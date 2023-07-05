import React, { useEffect, useState } from "react";
import pp from "../../../img/pp-1.png";
import { BsPlusCircle, BsFillBarChartFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import "../Style/App.scss";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Dashboard() {
  const [invite, setInvite] = useState([]);
  const [token, setToken] = useState('');

  const navigate = useNavigate();
  
    const refreshToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/token', {
          headers: {
            Authorization: `Bearer ${token}`, // Tambahkan token akses ke header
          },
        });
        setToken(response.data.accessToken);
        console.log("data: ", response.data);
        const decoded = jwt_decode(response.data.accessToken);
        console.log(decoded);
      } catch (error) {
        console.log('Terjadi kesalahan saat memperbarui token:', error.message);
      }
    };

  const fetchInvite = async () => {
    const response = await axios.get("http://localhost:5000/invite");
    setInvite(response.data);
  };

  const Logout = async() => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(invite)

  useEffect(() => {
    refreshToken();
    fetchInvite();
  }, []);

  return (
    <div className="dash">
      {invite.map((inviteItem) => (
        <div key={inviteItem.id} className="dash-card">
          <div className="dash-card-tumb">
            <div className="dash-card-tumb-icon">
              <Link to={`/edit/1/${inviteItem.id}`}><MdEdit className="tumb-icon" /></Link>
              <Link to={`/tamu/${inviteItem.id}`}><FaRegEye className="tumb-icon" /></Link>
              <Link to={`/edit/${inviteItem.id}/4`}><BsFillBarChartFill className="tumb-icon" /></Link>
            </div>
            <img src={pp} alt="Profile Picture" />
          </div>
          <div className="dash-card-title">
            <h2>{inviteItem.nama_pria} - {inviteItem.nama_wanita}</h2>
            <p className="active">active</p>
          </div>
          <p>{inviteItem.tgl_nikah}</p>
        </div>
      ))}
      <Link to={"/create"} className="dash-plus">
        <BsPlusCircle color="#7eb5a6" />
      </Link>
      <p className="dash-info">
        Diharapkan untuk membayar sebelum berakhir masa aktif. Apabila ingin
        memperpanjang masa aktif hubungi Admin.
      </p>
    </div>
  );
}

export default Dashboard;

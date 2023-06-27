import React, { useEffect, useState } from "react";
import pp from "../../../img/pp-1.png";
import { BsPlusCircle } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import "../Style/App.scss";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// const navigate = useNavigate()

function Dashborad() {
  const [invite, setInvite] = useState([]);

  const fetchInvite = async () => {
    const response = await axios.get("http://localhost:5000/invite");
    setInvite(response.data);
  };

  useEffect(() => {
    fetchInvite();
  }, []);

  return (
    <div className="dash">
      {invite.map((invite) => (
        <>
          <div className="dash-card">
            <div
              className="dash-card-tumb"
            >
              <div className="dash-card-tumb-icon">
                <MdEdit className="tumb-icon" />
                <FaRegEye className="tumb-icon" />
              </div>
              <img src={pp} />
            </div>
            <div className="dash-card-title">
              <h2>{invite.name_pria} - {invite.name_wanita}</h2>
              <p className="active">active</p>
            </div>
            <p>{invite.tgl_nikah}</p>
          </div >
        </>
      ))}
      <Link to={"/create"} className="dash-plus">
        <BsPlusCircle color="#7eb5a6" />
      </Link > <p className="dash-info">
        Diharapkan untuk membayar sebelum berakhir masa aktif. Apabila ingin
        memperpanjang masa aktif hubungi Admin.
      </p>
    </div>
  );
}

export default Dashborad;

import React from "react";
import pp from "../../../img/pp-1.png";
import { BsPlusCircle } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { Undangan } from "../../../sample";
import "../Style/App.scss";

// const navigate = useNavigate()

function Dashborad() {
  return (
    <div className="dash">
      {Undangan.map((invite) => (
        <div className="dash-card" key={invite.id}>
          <div className="dash-card-tumb">
            <div className="dash-card-tumb-icon">
              <Link to="/Create:id">
                <MdEdit className="tumb-icon" />
              </Link>
              <FaRegEye className="tumb-icon" />
            </div>
            <img src={pp} />
          </div>
          <div className="dash-card-title">
            <h2>
              {invite.nama_pria} - {invite.nama_wanita}
            </h2>
            <p className={invite.status ? "active" : "inactive"}>
              {invite.status ? "active" : "inactive"}
            </p>
          </div>
          <p>{invite.tgl_nikah}</p>
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

export default Dashborad;

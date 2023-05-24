import React from "react";
import pp from "../../../img/pp-1.png";
import { BsPlusCircle } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import "../Style/App.scss";
import { useNavigate, Link } from "react-router-dom";

// const navigate = useNavigate()

function Dashborad() {
  return (
    <div className="dash">
      <div className="dash-card">
        <div
          className="dash-card-tumb"
          // style={{ backgroundImage: "url(" + pp + ")" }}
        >
          <div className="dash-card-tumb-icon">
            <MdEdit className="tumb-icon" />
            <FaRegEye className="tumb-icon" />
          </div>
          <img src={pp} />
        </div>
        <div className="dash-card-title">
          <h2>Adam - Hawa</h2>
          <p className="active">active</p>
        </div>
        <p>10 juni 2020</p>
      </div>
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

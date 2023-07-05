import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import EditData from "../Elements/EditData";

function Insight() {
  const [invite, setInvite] = useState([]);
  const { id_undangan } = useParams();

  const fetchInvite = async () => {
    const response = await axios.get(
      `http://localhost:5000/guest/${id_undangan}`
    );
    setInvite(response.data);
  };
  useEffect(() => {
    fetchInvite();
  }, []);

  console.log(invite);

  return (
    <div className="insight">
      <EditData id={4}/>
      <div className="insight-menu">
        <h1>Insight</h1>
        <div className="insight-menu-main">
          <div className="insight-menu-main-card">
            <div className="value">
              <h2>{invite.length}</h2>
              <h3>orang</h3>
            </div>
            <p>Tamu diundang</p>
            <Link to={`/tamu/${id_undangan}`}>See More</Link>
          </div>
        </div>
      </div>
      <div className="insight-add">
        <Link to={`/scan/${id_undangan}`} className="insight-add-scan">
          <BsQrCodeScan />
        </Link>
        <div className="insight-add-done">
          <Link className="button" to="/dashboard">
            Done
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Insight;

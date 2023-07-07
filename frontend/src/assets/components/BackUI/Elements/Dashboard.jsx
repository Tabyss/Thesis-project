import React, { useEffect, useState } from "react";
import pp from "../../../img/pp-1.png";
import { BsPlusCircle, BsFillBarChartFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import "../Style/App.scss";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import axios from "axios";
import { Navbar } from "../../Layout/Landing/Landing";

function Dashboard() {
  const [invite, setInvite] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  const { id_user } = useParams();
  const userId = parseInt(id_user);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/undangan/${userId}`
        );
        setInvite(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInvite();
  }, [userId]);

  return (
    <>
      <Navbar />
      <div className="dash">
        {invite.map((inviteItem) => (
          <div key={inviteItem.id} className="dash-card">
            <div className="dash-card-tumb">
              <div className="dash-card-tumb-icon">
                <Link to={`/edit/1/${inviteItem.id}`}>
                  <MdEdit className="tumb-icon-1" />
                </Link>
                <Link to={`/tamu/${inviteItem.id}`}>
                  <FaRegEye className="tumb-icon-2" />
                </Link>
                <Link to={`/edit/4/${inviteItem.id}`}>
                  <BsFillBarChartFill className="tumb-icon-3" />
                </Link>
              </div>
              <img src={pp} alt="Profile Picture" />
            </div>
            <div className="dash-card-title">
              <h2>
                {inviteItem.nama_pria} - {inviteItem.nama_wanita}
              </h2>
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
    </>
  );
}

export default Dashboard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsQrCodeScan } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import EditData from "../Elements/EditData";

function Insight() {
  const [invite, setInvite] = useState([]);
  const [tamuHadir, setTamuHadir] = useState([]);
  const [tamuTidakHadir, setTamuTidakHadir] = useState([]);
  const [idUser, setIdUser] = useState("");
  const { id_undangan } = useParams();
  const { user, isError } = useSelector((state => state.auth));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);


  const fetchInvite = async () => {
    const response = await axios.get(`http://localhost:5000/invite/${id_undangan}`);
    setIdUser(response.data.id_user);
    console.log(response.data);
  };

  const fetchGuest = async () => {
    const response = await axios.get(
      `http://localhost:5000/guest/${id_undangan}`
    );
    setInvite(response.data);
  };

  const filterTamu = () => {
    const tamuHadir = invite.filter((tamu) => tamu.status === true);
    const tamuTidakHadir = invite.filter((tamu) => tamu.status === false);
    setTamuHadir(tamuHadir);
    setTamuTidakHadir(tamuTidakHadir);
  };
  useEffect(() => {
    fetchInvite();
    fetchGuest();
  }, []);

  useEffect(() => {
    filterTamu();
  }, [invite]);

  return (
    <div className="insight">
      <EditData id={4} />
      <div className="insight-menu">
        <h1>Insight</h1>
        <div className="insight-menu-main">
          <Link to={`/tamu/${id_undangan}`}>
            <div className="insight-menu-main-card">
              <div className="value">
                <h2>{invite.length}</h2>
                <h3>orang</h3>
              </div>
              <p>Tamu diundang</p>
              <h4>See More</h4>
            </div>
          </Link>
          <Link to={`/tamu/${id_undangan}`}>
            <div className="insight-menu-main-card">
              <div className="value">
                <h2>{tamuHadir.length}</h2>
                <h3>orang</h3>
              </div>
              <p>Tamu yang Hadir</p>
              <h4>See More</h4>
            </div>
          </Link>
          <Link to={`/tamu/${id_undangan}`}>
            <div className="insight-menu-main-card">
              <div className="value">
                <h2>{tamuTidakHadir.length}</h2>
                <h3>orang</h3>
              </div>
              <p>Tamu yang Tidak Hadir</p>
              <h4>See More</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="insight-add">
        <Link to={`/scan/${id_undangan}`} className="insight-add-scan">
          <BsQrCodeScan />
        </Link>
        <div className="insight-add-done">
          <Link className="button" to={`/dashboard/${idUser}`}>
            Done
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Insight;

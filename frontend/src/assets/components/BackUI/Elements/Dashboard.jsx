import React, { useEffect, useState } from "react";
// import pp from "../../../img/pp-1.png";
import { BsPlusCircle, BsFillBarChartFill } from "react-icons/bs";
<<<<<<< HEAD
import { MdEdit } from "react-icons/md";
=======
<<<<<<< HEAD
import { MdDelete, MdEdit } from "react-icons/md";
=======
import { MdEdit } from "react-icons/md";
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
import { FaRegEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "../Style/App.scss";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import axios from "axios";
import { Navbar } from "../../Layout/Landing/Landing";

function Dashboard() {
  const [invite, setInvite] = useState([]);
  const [couple, setCouple] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);
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

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        if (user && user.role === "admin") {
          const response = await axios.get(`http://localhost:5000/invite`);
          setInvite(response.data);
          console.log(response.data);
        } else {
          const response = await axios.get(
            `http://localhost:5000/undangan/${userId}`
          );
          setInvite(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCouple = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/couple`);
        setCouple(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInvite();
    fetchCouple();
  }, [userId, dispatch, isError, navigate, user]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/invite/${id}`);
      window.location.reload();
      alert("Data Berhasil dihapus");
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }

  const inviteData = invite.map((inviteItem) => {
    const coupleItem = couple.find((item) => item.id_undangan === inviteItem.id);
    return {
      ...inviteItem,
      url_foto: coupleItem ? coupleItem.url_foto : "", // Jika coupleItem tidak ditemukan, set url_foto menjadi string kosong
    };
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:5000/event/${id_acara}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
  return (
    <>
      <Navbar />
      <div className="dash">
        {inviteData.map((inviteItem) => (
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <Link to={`/edit/4/${inviteItem.id}`}>
                  <MdDelete className="tumb-icon-4" />
                </Link>
=======
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
                {user && user.role === "admin" && (
                  // Menampilkan tombol Delete hanya jika user adalah admin
                  <button onClick={() => handleDelete(inviteItem.id)}>
                    <AiFillDelete className="tumb-icon-4" />
                  </button>
                )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2dbbf24 (Fixing)
=======
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234
              </div>
              <img src={inviteItem.url_foto} />
            </div>
            <div className="dash-card-title">
              <h2>
                {inviteItem.nama_pria} - {inviteItem.nama_wanita}
              </h2>
            </div>
            <div className="dash-card-keterangan">
              <p>{inviteItem.tgl_nikah}</p>
            </div>
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

<<<<<<< HEAD
export default Dashboard;
=======
<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;
>>>>>>> f31f7f66cae67366c464fcd6efeba7a71bc527f1
>>>>>>> 2fe6780bb9efafc04648ce0af0ce595f736c3234

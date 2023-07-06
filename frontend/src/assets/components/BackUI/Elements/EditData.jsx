import React, { useState, useEffect } from "react";
import Tema from "../edithandle/Tema";
import Mempelai from "../edithandle/Mempelai";
import Acara from "../edithandle/Acara";
import Insight from "../edithandle/Insight";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";

const timeline = [
  {
    id: 1,
    dot: "Tema",
    direct: <Tema />,
  },
  {
    id: 2,
    dot: "Mempelai",
    direct: <Mempelai />,
  },
  {
    id: 3,
    dot: "Acara",
    direct: <Acara />,
  },
  {
    id: 4,
    dot: "Insight",
    direct: <Insight />,
  },
];
function EditData(id) {
  const [getId, setGetId] = useState(id);
  const [active, setActive] = useState(false);
  const { id_undangan } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  const handleLine = (e) => {
    setGetId(e.target.id);
    setActive(true);
    console.log(getId);
  };

  const handleNext = () => {
    setGetId(parseInt(getId) + 1);
  };

  return (
    <div className="edit">
      <div className="edit-timeline">
        <div className="edit-timeline-item">
          <ul className="edit-timeline-item-btn">
            {timeline.map((line, index) => (
              <li
                key={line.id}
                id={line.id}
                className={getId == line.id ? "active" : null}
              >
                <Link
                  to={`/edit/${line.id}/${id_undangan}`}
                  onClick={handleLine}
                >
                  <p id={line.id}>{index + 1}</p>
                  {line.dot}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditData;

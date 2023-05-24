import React, { useState } from "react";
import Tema from "../edithandle/tema";
import Mempelai from "../edithandle/Mempelai";
import Acara from "../edithandle/Acara";

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
    direct: "oy",
  },
];
function EditData() {
  const [getId, setGetId] = useState("1");
  const handleLine = (e) => {
    setGetId(e.target.id);
    console.log(getId);
  };

  return (
    <div className="edit">
      <div className="edit-timeline">
        <div className="edit-timeline-item">
          <ul className="edit-timeline-item-btn">
            {timeline.map((line, index) => (
              <li
                key={line.id}
                onClick={handleLine}
                id={line.id}
                className={getId == line.id ? "active" : null}
              >
                <p onClick={handleLine} id={line.id}>
                  {index + 1}
                </p>
                {line.dot}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="edit-contain">
        {timeline.map((line, index) => (
          <div key={line.id} className="edit-contain-form">
            <div>{getId === `${line.id}` && <div>{line.direct}</div>}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditData;

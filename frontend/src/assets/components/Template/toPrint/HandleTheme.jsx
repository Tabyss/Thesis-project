import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ThemeOne from "../ThemeOne/ThemeOne";
import ThemeTwo from "../ThemeTwo/ThemeTwo";

function HandleTheme() {
  const [theme, setTheme] = useState("");
  const [idUndangan, setIdUndangan] = useState("");
  const { id_tamu } = useParams();

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tamu/${id_tamu}`);
        setIdUndangan(response.data.id_undangan);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGuest();
  }, [id_tamu]);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tema/${idUndangan}`);
        const temaUndangan = response.data.tema_undangan;

        setTheme(temaUndangan);
      } catch (error) {
        console.log(error);
      }
    };

    if (idUndangan !== "") {
      fetchTheme();
    }
  }, [idUndangan]);

  return (
    <div>
      {theme === "1" ? <ThemeTwo /> : <ThemeOne />}
    </div>
  );
}

export default HandleTheme;

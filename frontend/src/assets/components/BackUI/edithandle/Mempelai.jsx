import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import EditData from "../Elements/EditData";

const Mempelai = () => {
  const { mutate } = useSWRConfig();
  const [previewCover, setPreviewCover] = useState("");
  const [previewPria, setPreviewPria] = useState("");
  const [previewWanita, setPreviewWanita] = useState("");
  const [previewGallery, setPreviewGallery] = useState("");
  const [fotoCover, setFotoCover] = useState("");
  const [fotoPria, setFotoPria] = useState("");
  const [fotoWanita, setFotoWanita] = useState("");
  const [fotoGallery, setFotoGallery] = useState("");
  const [judulKutipan, setJudulKutipan] = useState("");
  const [isiKutipan, setIsiKutipan] = useState("");
  const [namaLengkapPria, setNamaLengkapPria] = useState("");
  const [namaLengkapWanita, setNamaLengkapWanita] = useState("");
  const [namaPanggilanPria, setNamaPanggilanPria] = useState("");
  const [namaPanggilanWanita, setNamaPanggilanWanita] = useState("");
  const [namaAyahPria, setNamaAyahPria] = useState("");
  const [namaAyahWanita, setNamaAyahWanita] = useState("");
  const [namaIbuPria, setNamaIbuPria] = useState("");
  const [namaIbuWanita, setNamaIbuWanita] = useState("");
  const [instagramPria, setInstagramPria] = useState("");
  const [instagramWanita, setInstagramWanita] = useState("");
  const [facebookPria, setFacebookPria] = useState("");
  const [facebookWanita, setFacebookWanita] = useState("");
  const [twitterPria, setTwitterPria] = useState("");
  const [twitterWanita, setTwitterWanita] = useState("");
  const [msg, setMsg] = useState("");
  const { id_undangan } = useParams();
  const [idUndangan, setIdUndangan] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  const [formCover, setFormCover] = useState("")
  const [formDataPria, setFormDataPria] = useState({
    foto_pria: "",
    nama_pria: "",
    nama_panjang_pria: "",
    nama_bapak_pria: "",
    nama_ibu_pria: "",
    instagram: "",
    facebook: "",
    twitter: "",
  })
  const [formDataWanita, setFormDataWanita] = useState({
    foto_wanita: "",
    nama_wanita: "",
    nama_panjang_wanita: "",
    nama_bapak_wanita: "",
    nama_ibu_wanita: "",
    instagram: "",
    facebook: "",
    twitter: "",
  })
  const [formKutipan,setFormKutipan] = useState({
    judul:"",
    Kutipan:"",
  })
  const [formGallery,setFormGallery] = useState({})

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    setIdUndangan(id_undangan);
  }, [id_undangan]);

  const handleCoverChange = (e) => {
    const image = e.target.files[0];
    setFotoCover(image);
    setPreviewCover(URL.createObjectURL(image));
  }

  const handlePriaChange = (e) => {
    const image = e.target.files[0];
    setFotoPria(image);
    setPreviewPria(URL.createObjectURL(image));
    // console.log(image);
  }

  const handleWanitaChange = (e) => {
    const image = e.target.files[0];
    setFotoWanita(image);
    setPreviewWanita(URL.createObjectURL(image));
  }

  const handleGalleryChange = (e) => {
    const image = e.target.files[0];
    setFotoGallery(image);
    setPreviewGallery(URL.createObjectURL(image));
  }

  const CreateCouple = async (e) => {
    e.preventDefault();

    if (!fotoCover) {
      alert("Silahkan Upload Foto Cover Terlebih Dahulu");
    }
    if (!fotoPria) {
      alert("Silahkan Upload Foto Pria Terlebih Dahulu");
    } else if (!fotoWanita) {
      alert("Silahkan Upload Foto Wanita Terlebih Dahulu");
    } else {

      const formDataCover = new FormData();
      const formDataPria = new FormData();
      const formDataWanita = new FormData();
      const formDataGallery = new FormData();

      // Tambahkan data file ke FormData
      formDataCover.append('foto_cover', fotoCover);
      formDataCover.append('judul_kutipan', judulKutipan);
      formDataCover.append('isi_kutipan', isiKutipan);
      formDataCover.append('id_undangan', idUndangan);
      formDataPria.append('nama_lengkap', namaLengkapPria);
      formDataPria.append('nama_panggilan', namaPanggilanPria);
      formDataPria.append('nama_ayah', namaAyahPria);
      formDataPria.append('nama_ibu', namaIbuPria);
      formDataPria.append('instagram', instagramPria);
      formDataPria.append('facebook', facebookPria);
      formDataPria.append('twitter', twitterPria);
      formDataPria.append('foto_pria', fotoPria);
      formDataPria.append('id_undangan', idUndangan);
      formDataWanita.append('nama_lengkap', namaLengkapWanita);
      formDataWanita.append('nama_panggilan', namaPanggilanWanita);
      formDataWanita.append('nama_ayah', namaAyahWanita);
      formDataWanita.append('nama_ibu', namaIbuWanita);
      formDataWanita.append('instagram', instagramWanita);
      formDataWanita.append('facebook', facebookWanita);
      formDataWanita.append('twitter', twitterWanita);
      formDataWanita.append('foto_wanita', fotoWanita);
      formDataWanita.append('id_undangan', idUndangan);
      formDataGallery.append('foto_gallery', fotoGallery);
      formDataGallery.append('id_undangan', idUndangan);

      try {
        await axios.post(`http://localhost:5000/couple`, formDataCover, {
          headers: {
            "Content-Type": "multipart/form-data"
          },

        });
        await axios.post(`http://localhost:5000/datapria`, formDataPria, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });
        await axios.post(`http://localhost:5000/datawanita`, formDataWanita, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        });
        alert("Data Berhasil Ditambah");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setMsg(error.response.data.msg);
        }
      }
    }
  }
  const CreateGallery = async (e) => {
    e.preventDefault();

    if (!fotoGallery) {
      alert("Silahkan Upload Foto Gallery Terlebih Dahulu");
    } else {
      const formDataGallery = new FormData();

      // Tambahkan data file ke FormData
      formDataGallery.append('foto_gallery', fotoGallery);

      try {
        await axios.post('http://localhost:5000/gallery', formDataGallery, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setMsg(error.response.data.msg);
          console.log(error.message)
        }
      }
      setFotoGallery(null);
      setPreviewGallery(null);
    }
  }

  const fetchGallery = async () => {
    const response = await axios.get("http://localhost:5000/gallery");
    return response.data;
  };

  const { data } = useSWR("gallery", fetchGallery, { refreshInterval: 100 });

  const deleteGallery = async (id_gallery) => {
    await axios.delete(`http://localhost:5000/gallery/${id_gallery}`);
    mutate("gallery");
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="mempelai">
      <EditData id={2}/>
      <form onSubmit={CreateCouple}>
<<<<<<< HEAD
>>>>>>> 83e91cb (Connect Backend to Frontend)
=======
>>>>>>> bb43b2c (add login middleware, connect frontend)
        <div className="mempelai-form">
          <h1>Data Pasangan</h1>
          <div className="mempelai-form-cover">
            <h2>foto cover berdua</h2>
            <div className="mempelai-form-cover-upload">
              <div className="mempelai-form-cover-upload-bg">
                <h3>upload foto cover</h3>
                <p>JPG, GIF or PNG. Max size of 800K</p>
              </div>
              <input type="file" accept="image/*" name="fotoCover" onChange={handleCoverChange} />
            </div>
            <div className="mempelai-form-cover-preview">
              {previewCover && (
                <div>
                  <img src={previewCover} className="preview-image" />
                </div>
              )}
            </div>
          </div>
          <div className="mempelai-form-keluarga">
            <h2>mempelai pria</h2>
            <div className="mempelai-form-keluarga-upload">
              <div className="mempelai-form-keluarga-upload-bg">
                <h3>upload foto pria</h3>
                <p>JPG, GIF or PNG. Max size of 800K</p>
              </div>
              <input type="file" accept="image/*" name="fotoPria" onChange={handlePriaChange} />

            </div>
            <div className="mempelai-form-keluarga-preview">
              {previewPria && (
                <div>
                  <img src={previewPria} className="preview-image" />
                </div>
              )}
            </div>
            <div className="mempelai-form-keluarga-data">
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama panggilan pria</p>
                <input type="text" required placeholder="Hanan" value={namaPanggilanPria} onChange={(e) => setNamaPanggilanPria(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama lengkap pria</p>
                <input type="text" required placeholder="Hanan Ataki S.Kom" value={namaLengkapPria} onChange={(e) => setNamaLengkapPria(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ayah</p>
                <input type="text" required placeholder="Bambang Rusdi" value={namaAyahPria} onChange={(e) => setNamaAyahPria(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ibu</p>
                <input type="text" required placeholder="Yuni Ningsih" value={namaIbuPria} onChange={(e) => setNamaIbuPria(e.target.value)} />
              </div>
            </div>
            <div className="mempelai-form-keluarga-sosmed">
              <p>Sosial Media</p>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsFacebook className="icon" />
                <input type="url" value={facebookPria} onChange={(e) => setFacebookPria(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsInstagram className="icon" />
                <input type="url" value={instagramPria} onChange={(e) => setInstagramPria(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsTwitter className="icon" />
                <input type="url" value={twitterPria} onChange={(e) => setTwitterPria(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="mempelai-form-keluarga">
            <h2>mempelai wanita</h2>
            <div className="mempelai-form-keluarga-upload">
              <div className="mempelai-form-keluarga-upload-bg">
                <h3>upload foto wanita</h3>
                <p>JPG, GIF or PNG. Max size of 800K</p>
              </div>
              <input type="file" accept="image/*" name="fotoWanita" onChange={handleWanitaChange} />

            </div>
            <div className="mempelai-form-keluarga-preview">
              {previewWanita && (
                <div>
                  <img src={previewWanita} className="preview-image" />
                </div>
              )}
            </div>
            <div className="mempelai-form-keluarga-data">
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama panggilan wanita</p>
                <input type="text" required placeholder="Hanan" value={namaPanggilanWanita} onChange={(e) => setNamaPanggilanWanita(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama lengkap wanita</p>
                <input type="text" required placeholder="Hanan Ataki S.Kom" value={namaLengkapWanita} onChange={(e) => setNamaLengkapWanita(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ayah</p>
                <input type="text" required placeholder="Bambang Rusdi" value={namaAyahWanita} onChange={(e) => setNamaAyahWanita(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ibu</p>
                <input type="text" required placeholder="Yuni Ningsih" value={namaIbuWanita} onChange={(e) => setNamaIbuWanita(e.target.value)} />
              </div>
            </div>
            <div className="mempelai-form-keluarga-sosmed">
              <p>Sosial Media</p>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsFacebook className="icon" />
                <input type="url" value={facebookWanita} onChange={(e) => setFacebookWanita(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsInstagram className="icon" />
                <input type="url" value={instagramWanita} onChange={(e) => setInstagramWanita(e.target.value)} />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsTwitter className="icon" />
                <input type="url" value={twitterWanita} onChange={(e) => setTwitterWanita(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="mempelai-kutipan">
          <h1>kutipan</h1>
          <div className="mempelai-kutipan-main">
            <input type="text" required value={judulKutipan} onChange={(e) => setJudulKutipan(e.target.value)} />
            <textarea value={isiKutipan} onChange={(e) => setIsiKutipan(e.target.value)} ></textarea>
          </div>
        </div>
        <div className="mempelai-next">
          <button className="mempelai-next-button" type="submit">Save</button>
        </div>
      </form >
      <div className="mempelai-gallery">
        <h1>Gallery Pasangan</h1>
        <div className="mempelai-gallery-main">
          <h2>foto pasangan</h2>
          <form onSubmit={CreateGallery}>
            <div className="mempelai-gallery-main-upload">
              <div className="mempelai-gallery-main-upload-bg">
                <h3>upload foto Gallery</h3>
                <p>JPG, GIF or PNG. Max size of 800K</p>
              </div>
              <input type="file" accept="image/*" name="fotoCover" onChange={handleGalleryChange} />
            </div>
            <div className="mempelai-form-keluarga-preview">
              {previewGallery && (
                <div>
                  <img src={previewGallery} className="preview-image" />
                </div>
              )}
            </div>
            <div className="mempelai-next">
              <button className="mempelai-next-button" type="submit">Save</button>
            </div>
          </form>
          <div className="mempelai-gallery-main-list">
            {data && data.map((data, index) => (
              <div className="mempelai-gallery-main-list-action">
                  <p>{index + 1}</p>
                <div key={data.id_gallery} className="table-body-contain">
                  <img src={data.url_foto} alt="" className="table-body-contain-img" />
                </div>
                <div className="mempelai-gallery-main-list-action-btn">
                  <button className="edit">Ganti</button>
                  <button className="delete" onClick={() => deleteGallery(data.id_gallery)}>Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mempelai-next">
        <button className="mempelai-next-button" type="submit">Next</button>
      </div>
    </div >
  );
}

export default Mempelai;


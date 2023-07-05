import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EditData from "../Elements/EditData";

const Mempelai = () => {
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
  const [kutipan, setKutipan] = useState({})
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
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const { id_undangan,id_pasangan } = useParams();
  const [idUndangan, setIdUndangan] = useState("");
  const [idPasangan, setIdPasangan] = useState("");

  useEffect(() => {
    setIdUndangan(id_undangan);
    setIdPasangan(id_undangan);
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

  const Create = async (e) => {
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
      formDataCover.append('id_pasangan', idPasangan);
      formDataPria.append('nama_lengkap', namaLengkapPria);
      formDataPria.append('nama_panggilan', namaPanggilanPria);
      formDataPria.append('nama_ayah', namaAyahPria);
      formDataPria.append('nama_ibu', namaIbuPria);
      formDataPria.append('instagram', instagramPria);
      formDataPria.append('facebook', facebookPria);
      formDataPria.append('twitter', twitterPria);
      formDataPria.append('foto_pria', fotoPria);
      formDataWanita.append('nama_lengkap', namaLengkapWanita);
      formDataWanita.append('nama_panggilan', namaPanggilanWanita);
      formDataWanita.append('nama_ayah', namaAyahWanita);
      formDataWanita.append('nama_ibu', namaIbuWanita);
      formDataWanita.append('instagram', instagramWanita);
      formDataWanita.append('facebook', facebookWanita);
      formDataWanita.append('twitter', twitterWanita);
      formDataWanita.append('foto_wanita', fotoWanita);
      formDataGallery.append('foto_gallery', fotoGallery);

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
        alert("Berhasil");
        // navigate("/create");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setMsg(error.response.data.msg);
          console.log(error.message)
        }
      }
    }
  }

  return (
    <div className="mempelai">
    <EditData id={2}/>
      <form onSubmit={Create}>
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
        <div className="mempelai-gallery">
          <h1>Gallery Pasangan</h1>
          <div className="mempelai-gallery-main">
            <h2>foto pasangan</h2>
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
            <div className="mempelai-gallery-main-list">
              <div className="mempelai-gallery-main-list-action">
                <p>1</p>
                <h4>gambar 1.jpg</h4>
                <div className="mempelai-gallery-main-list-action-btn">
                  <button className="edit">Ganti</button>
                  <button className="delete">Hapus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mempelai-next">
          <button className="mempelai-next-button" type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Mempelai;


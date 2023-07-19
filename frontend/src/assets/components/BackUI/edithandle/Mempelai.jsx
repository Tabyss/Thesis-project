import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../Handler/authSlicer";
import useSWR, { useSWRConfig } from "swr";
import axios from "axios";
import EditData from "../Elements/EditData";

const Mempelai = () => {
  //preview
  const [previewCover, setPreviewCover] = useState("");
  const [previewPria, setPreviewPria] = useState("");
  const [previewWanita, setPreviewWanita] = useState("");
  const [previewGallery, setPreviewGallery] = useState("");

  //cover
  const [fotoCover, setFotoCover] = useState("");
  const [fotoGallery, setFotoGallery] = useState("");
  const [idCouple, setIdCouple] = useState("");

  //kutipan
  const [judulKutipan, setJudulKutipan] = useState("");
  const [isiKutipan, setIsiKutipan] = useState("");

  //pria
<<<<<<< HEAD
  const [idPria, setIdPria] = useState("");
=======
>>>>>>> 8547a02 (add handle update)
  const [fotoPria, setFotoPria] = useState("");
  const [namaLengkapPria, setNamaLengkapPria] = useState("");
  const [namaPanggilanPria, setNamaPanggilanPria] = useState("");
  const [namaAyahPria, setNamaAyahPria] = useState("");
  const [namaIbuPria, setNamaIbuPria] = useState("");
  const [instagramPria, setInstagramPria] = useState("https://www.instagram.com/");
  const [facebookPria, setFacebookPria] = useState("https://www.facebook.com/");
  const [twitterPria, setTwitterPria] = useState("https://twitter.com/");

  //wanita
<<<<<<< HEAD
  const [idWanita, setIdWanita] = useState("");
=======
>>>>>>> 8547a02 (add handle update)
  const [fotoWanita, setFotoWanita] = useState("");
  const [namaLengkapWanita, setNamaLengkapWanita] = useState("");
  const [namaPanggilanWanita, setNamaPanggilanWanita] = useState("");
  const [namaAyahWanita, setNamaAyahWanita] = useState("");
  const [namaIbuWanita, setNamaIbuWanita] = useState("");
  const [instagramWanita, setInstagramWanita] = useState("https://www.instagram.com/");
  const [facebookWanita, setFacebookWanita] = useState("https://www.facebook.com/");
  const [twitterWanita, setTwitterWanita] = useState("https://twitter.com/");

  const [msg, setMsg] = useState("");
  const [idUndangan, setIdUndangan] = useState("");

  const { mutate } = useSWRConfig();
  const { id_undangan } = useParams();
  const { isError } = useSelector((state) => state.auth);

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

  useEffect(() => {
    setIdUndangan(id_undangan);
  }, [id_undangan]);


  useEffect(() => {
    const handleGetPria = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(
          `http://localhost:5000/pria/${id_undangan}`
        );
<<<<<<< HEAD
        setIdPria(response.data.id_pria);
=======
>>>>>>> 8547a02 (add handle update)
        setNamaLengkapPria(response.data.nama_lengkap);
        setNamaPanggilanPria(response.data.nama_panggilan);
        setNamaAyahPria(response.data.nama_ayah);
        setNamaIbuPria(response.data.nama_ibu);
        setInstagramPria(response.data.instagram);
        setFacebookPria(response.data.facebook);
        setTwitterPria(response.data.twitter);
<<<<<<< HEAD
        setFotoPria(response.data.foto_pria);
        setPreviewPria(response.data.url_foto);
=======
>>>>>>> 8547a02 (add handle update)
=======
        const response = await axios.get(`http://localhost:5000/pria/${id_undangan}`);
        if (response.data != null) {
          setIdPria(response.data.id_pria);
          setNamaLengkapPria(response.data.nama_lengkap);
          setNamaPanggilanPria(response.data.nama_panggilan);
          setNamaAyahPria(response.data.nama_ayah);
          setNamaIbuPria(response.data.nama_ibu);
          setInstagramPria(response.data.instagram);
          setFacebookPria(response.data.facebook);
          setTwitterPria(response.data.twitter);
          setFotoPria(response.data.foto_pria);
          setPreviewPria(response.data.url_foto);
        } else {
          setIdPria(null);
        }
>>>>>>> 2dbbf24 (Fixing)
      } catch (error) {
        console.log(error);
      }
    };
    const handleGetWanita = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(
          `http://localhost:5000/wanita/${id_undangan}`
        );
<<<<<<< HEAD
        setIdWanita(response.data.id_wanita);
=======
>>>>>>> 8547a02 (add handle update)
        setNamaLengkapWanita(response.data.nama_lengkap);
        setNamaPanggilanWanita(response.data.nama_panggilan);
        setNamaAyahWanita(response.data.nama_ayah);
        setNamaIbuWanita(response.data.nama_ibu);
        setInstagramWanita(response.data.instagram);
        setFacebookWanita(response.data.facebook);
        setTwitterWanita(response.data.twitter);
<<<<<<< HEAD
        setFotoWanita(response.data.foto_wanita);
        setPreviewWanita(response.data.url_foto);
=======
>>>>>>> 8547a02 (add handle update)
=======
        const response = await axios.get(`http://localhost:5000/wanita/${id_undangan}`);
        const data = response.data;
        if (data != null) {
          setIdWanita(response.data.id_wanita);
          setNamaLengkapWanita(response.data.nama_lengkap);
          setNamaPanggilanWanita(response.data.nama_panggilan);
          setNamaAyahWanita(response.data.nama_ayah);
          setNamaIbuWanita(response.data.nama_ibu);
          setInstagramWanita(response.data.instagram);
          setFacebookWanita(response.data.facebook);
          setTwitterWanita(response.data.twitter);
          setFotoWanita(response.data.foto_wanita);
          setPreviewWanita(response.data.url_foto);
        } else {
          setIdWanita(null);
        }
>>>>>>> 2dbbf24 (Fixing)
      } catch (error) {
        console.log(error);
      }
    };
    const handleGetKutipan = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(
          `http://localhost:5000/pasangan/${id_undangan}`
        );
        setIdCouple(response.data.id_pasangan)
        setJudulKutipan(response.data.judul_kutipan);
        setIsiKutipan(response.data.isi_kutipan);
<<<<<<< HEAD
        setFotoCover(response.data.foto_cover);
        setPreviewCover(response.data.url_foto);
=======
>>>>>>> 8547a02 (add handle update)
=======
        const response = await axios.get(`http://localhost:5000/pasangan/${id_undangan}`);
        const data = response.data;
        if (data != null) {
          setIdCouple(response.data.id_pasangan)
          setJudulKutipan(response.data.judul_kutipan);
          setIsiKutipan(response.data.isi_kutipan);
          setFotoCover(response.data.foto_cover);
          setPreviewCover(response.data.url_foto);
        } else {
          setIdCouple(null);
        }
>>>>>>> 2dbbf24 (Fixing)
      } catch (error) {
        console.log(error);
      }
    };

    handleGetPria();
    handleGetWanita();
    handleGetKutipan();
  }, [id_undangan]);
<<<<<<< HEAD
  
<<<<<<< HEAD
=======

  const MAX_IMAGE_SIZE_MB = 10;

>>>>>>> 2dbbf24 (Fixing)
  // console.log(idCouple)
=======
  console.log(idCouple)
>>>>>>> 8547a02 (add handle update)
  const handleCoverChange = (e) => {
    const image = e.target.files[0];
    // Validasi ukuran gambar
    if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      // Jika ukuran gambar melebihi batas yang ditentukan, berikan pesan kesalahan
      alert(`Ukuran gambar melebihi ${MAX_IMAGE_SIZE_MB} MB`);
    } else {
      setFotoCover(image);
      setPreviewCover(URL.createObjectURL(image));
    }
  };

  const handlePriaChange = (e) => {
    const image = e.target.files[0];
    // Validasi ukuran gambar
    if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      // Jika ukuran gambar melebihi batas yang ditentukan, berikan pesan kesalahan
      alert(`Ukuran gambar melebihi ${MAX_IMAGE_SIZE_MB} MB`);
    } else {
      setFotoPria(image);
      setPreviewPria(URL.createObjectURL(image));
    }
  };

  const handleWanitaChange = (e) => {
    const image = e.target.files[0];

    // Validasi ukuran gambar
    if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      // Jika ukuran gambar melebihi batas yang ditentukan, berikan pesan kesalahan
      alert(`Ukuran gambar melebihi ${MAX_IMAGE_SIZE_MB} MB`);
    } else {
      setFotoWanita(image);
      setPreviewWanita(URL.createObjectURL(image));
    }
  };

  const handleGalleryChange = (e) => {
    const image = e.target.files[0];

    // Validasi ukuran gambar
    if (image.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      // Jika ukuran gambar melebihi batas yang ditentukan, berikan pesan kesalahan
      alert(`Ukuran gambar melebihi ${MAX_IMAGE_SIZE_MB} MB`);
      return;
    } else {
      setFotoGallery(image);
      setPreviewGallery(URL.createObjectURL(image));
    }

  };

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

      // Tambahkan data file ke FormData

      //form cover
      formDataCover.append("foto_cover", fotoCover);
      formDataCover.append("id_undangan", idUndangan);

      //form pria
      formDataPria.append("nama_lengkap", namaLengkapPria);
      formDataPria.append("nama_panggilan", namaPanggilanPria);
      formDataPria.append("nama_ayah", namaAyahPria);
      formDataPria.append("nama_ibu", namaIbuPria);
      formDataPria.append("instagram", instagramPria);
      formDataPria.append("facebook", facebookPria);
      formDataPria.append("twitter", twitterPria);
      formDataPria.append("foto_pria", fotoPria);
      formDataPria.append("id_undangan", idUndangan);

      //form wanita
      formDataWanita.append("nama_lengkap", namaLengkapWanita);
      formDataWanita.append("nama_panggilan", namaPanggilanWanita);
      formDataWanita.append("nama_ayah", namaAyahWanita);
      formDataWanita.append("nama_ibu", namaIbuWanita);
      formDataWanita.append("instagram", instagramWanita);
      formDataWanita.append("facebook", facebookWanita);
      formDataWanita.append("twitter", twitterWanita);
      formDataWanita.append("foto_wanita", fotoWanita);
      formDataWanita.append("id_undangan", idUndangan);

      //form kutipan
      formDataCover.append("judul_kutipan", judulKutipan);
      formDataCover.append("isi_kutipan", isiKutipan);

      try {
        if (idCouple != null) {
          await axios.patch(`http://localhost:5000/couple/${idCouple}`, formDataCover, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
<<<<<<< HEAD
<<<<<<< HEAD
          await axios.patch(`http://localhost:5000/datapria/${idPria}`, formDataPria, {
=======
          await axios.patch(`http://localhost:5000/pria/${id_undangan}`, formDataPria, {
>>>>>>> 8547a02 (add handle update)
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
<<<<<<< HEAD
          await axios.patch(`http://localhost:5000/datawanita/${idWanita}`, formDataWanita, {
=======
          await axios.patch(`http://localhost:5000/wanita/${id_undangan}`, formDataWanita, {
>>>>>>> 8547a02 (add handle update)
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          alert("Data Berhasil Ditambah");
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            setMsg(error.response.data.msg);
          }
        }
      }else {
        try {
=======
        } else {
>>>>>>> 2dbbf24 (Fixing)
          await axios.post(`http://localhost:5000/couple`, formDataCover, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        };
        if (idPria != null) {
          await axios.patch(`http://localhost:5000/datapria/${idPria}`, formDataPria, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } else {
          await axios.post(`http://localhost:5000/datapria`, formDataPria, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        };
        if (idWanita != null) {
          await axios.patch(`http://localhost:5000/datawanita/${idWanita}`, formDataWanita, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } else {
          await axios.post(`http://localhost:5000/datawanita`, formDataWanita, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
<<<<<<< HEAD
          alert("Data Berhasil Ditambah");
<<<<<<< HEAD
          navigate(`/edit/2${id_undangan}`);
=======
>>>>>>> 8547a02 (add handle update)
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            setMsg(error.response.data.msg);
          }
=======
        };
        alert("Data Berhasil Ditambah");
        navigate(`/edit/3/${id_undangan}`);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setMsg(error.response.data.msg);
>>>>>>> 2dbbf24 (Fixing)
        }
        navigate(`/edit/3/${id_undangan}`);
      }
    }
  };
  const CreateGallery = async (e) => {
    e.preventDefault();

    if (!fotoGallery) {
      alert("Silahkan Upload Foto Gallery Terlebih Dahulu");
    } else {
      const formDataGallery = new FormData();

      //form gallery
      formDataGallery.append("foto_gallery", fotoGallery);
      formDataGallery.append("id_undangan", idUndangan);

      try {
        await axios.post("http://localhost:5000/gallery", formDataGallery, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setMsg(error.response.data.msg);
          console.log(error.message);
        }
      }
      setFotoGallery(null);
      setPreviewGallery(null);
    }
  };

  const fetchGallery = async () => {
    const response = await axios.get(`http://localhost:5000/galeri/${id_undangan}`);
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
      <EditData id={2} />
<<<<<<< HEAD
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
              <input
                type="file"
                accept="image/*"
                name="fotoCover"
                onChange={handleCoverChange}
              />
              <div className="mempelai-form-cover-upload-preview">
=======
        <form onSubmit={CreateCouple}>
          <div className="mempelai-form">
            <h1>Data Pasangan</h1>
            <div className="mempelai-form-cover">
              <h2>foto cover berdua</h2>
              <div className="mempelai-form-cover-upload">
                <input
                  type="file"
                  accept="image/x-png, image/jpeg"
                  name="fotoCover"
                  onChange={handleCoverChange}
                />
                <div className="mempelai-form-cover-upload-bg">
                  <h3>upload foto cover</h3>
                  <p>JPG or PNG. Max size of 10 MB</p>
                </div>
>>>>>>> 2dbbf24 (Fixing)
                {previewCover && (
                  <div className="mempelai-form-cover-upload-preview">
                    <div>
                      <img src={previewCover} className="preview-image" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mempelai-form-keluarga">
              <h2>mempelai pria</h2>
              <div className="mempelai-form-keluarga-upload">
                <input
                  type="file"
                  accept="image/x-png, image/jpeg"
                  name="fotoPria"
                  onChange={handlePriaChange}
                />
                <div className="mempelai-form-keluarga-upload-bg">
                  <h3>upload foto pria</h3>
                  <p>JPG or PNG. Max size of 10 MB</p>
                </div>
                {previewPria && (
                  <div className="mempelai-form-keluarga-upload-preview">
                    <img src={previewPria} className="preview-image" />
                  </div>
                )}
              </div>
              <div className="mempelai-form-keluarga-data">
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama panggilan pria</p>
                  <input
                    type="text"
                    required
                    placeholder="Hanan"
                    value={namaPanggilanPria}
                    onChange={(e) => setNamaPanggilanPria(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama lengkap pria</p>
                  <input
                    type="text"
                    required
                    placeholder="Hanan Ataki S.Kom"
                    value={namaLengkapPria}
                    onChange={(e) => setNamaLengkapPria(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama Ayah</p>
                  <input
                    type="text"
                    required
                    placeholder="Bambang Rusdi"
                    value={namaAyahPria}
                    onChange={(e) => setNamaAyahPria(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama Ibu</p>
                  <input
                    type="text"
                    required
                    placeholder="Yuni Ningsih"
                    value={namaIbuPria}
                    onChange={(e) => setNamaIbuPria(e.target.value)}
                  />
                </div>
              </div>
              <div className="mempelai-form-keluarga-sosmed">
                <p>Sosial Media</p>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsFacebook className="icon" />
                  <input
                    type="url"
                    value={facebookPria}
                    onChange={(e) => setFacebookPria(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsInstagram className="icon" />
                  <input
                    type="url"
                    value={instagramPria}
                    onChange={(e) => setInstagramPria(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsTwitter className="icon" />
                  <input
                    type="url"
                    value={twitterPria}
                    onChange={(e) => setTwitterPria(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mempelai-form-keluarga">
              <h2>mempelai wanita</h2>
              <div className="mempelai-form-keluarga-upload">
                <input
                  type="file"
                  accept="image/x-png, image/jpeg"
                  name="fotoWanita"
                  onChange={handleWanitaChange}
                />
                <div className="mempelai-form-keluarga-upload-bg">
                  <h3>upload foto wanita</h3>
                  <p>JPG or PNG. Max size of 10 MB</p>
                </div>
                {previewWanita && (
                  <div className="mempelai-form-keluarga-upload-preview">
                    <img src={previewWanita} className="preview-image" />
                  </div>
                )}
              </div>
              <div className="mempelai-form-keluarga-data">
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama panggilan wanita</p>
                  <input
                    type="text"
                    required
                    placeholder="Hanan"
                    value={namaPanggilanWanita}
                    onChange={(e) => setNamaPanggilanWanita(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama lengkap wanita</p>
                  <input
                    type="text"
                    required
                    placeholder="Hanan Ataki S.Kom"
                    value={namaLengkapWanita}
                    onChange={(e) => setNamaLengkapWanita(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama Ayah</p>
                  <input
                    type="text"
                    required
                    placeholder="Bambang Rusdi"
                    value={namaAyahWanita}
                    onChange={(e) => setNamaAyahWanita(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-data-pribadi">
                  <p>Nama Ibu</p>
                  <input
                    type="text"
                    required
                    placeholder="Yuni Ningsih"
                    value={namaIbuWanita}
                    onChange={(e) => setNamaIbuWanita(e.target.value)}
                  />
                </div>
              </div>
              <div className="mempelai-form-keluarga-sosmed">
                <p>Sosial Media</p>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsFacebook className="icon" />
                  <input
                    type="url"
                    value={facebookWanita}
                    onChange={(e) => setFacebookWanita(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsInstagram className="icon" />
                  <input
                    type="url"
                    value={instagramWanita}
                    onChange={(e) => setInstagramWanita(e.target.value)}
                  />
                </div>
                <div className="mempelai-form-keluarga-sosmed-link">
                  <BsTwitter className="icon" />
                  <input
                    type="url"
                    value={twitterWanita}
                    onChange={(e) => setTwitterWanita(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mempelai-kutipan">
            <h1>kutipan</h1>
            <div className="mempelai-kutipan-main">
              <input
                type="text"
                required
                value={judulKutipan}
                placeholder="Judul Kutipan"
                onChange={(e) => setJudulKutipan(e.target.value)}
              />
              <textarea
                value={isiKutipan}
                placeholder="Isi Kutipan"
                onChange={(e) => setIsiKutipan(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mempelai-next">
            <button className="mempelai-next-button" type="submit">
              Next
            </button>
          </div>
        </form>
        <div className="mempelai-gallery">
          <h1>Gallery Pasangan</h1>
          <div className="mempelai-gallery-main">
            <h2>foto pasangan</h2>
            <form onSubmit={CreateGallery}>
              <div className="mempelai-form-keluarga-upload">
                <input
                  type="file"
                  accept="image/x-png, image/jpeg"
                  name="fotoCover"
                  onChange={handleGalleryChange}
                />
                <div className="mempelai-form-keluarga-upload-bg">
                  <h3>upload foto Gallery</h3>
                  <p>JPG or PNG. Max size of 10 MB</p>
                </div>
                {previewGallery && (
                  <div>
                    <div className="mempelai-form-keluarga-upload-preview">
                      <img src={previewGallery} className="preview-image" />
                    </div>
                  </div>
                )}
              </div>
              <div className="mempelai-save">
                <button className="mempelai-save-button" type="submit">
                  Save
                </button>
              </div>
            </form>
            <div className="mempelai-gallery-main-list">
              {data &&
                data.map((data, index) => (
                  <div className="mempelai-gallery-main-list-action">
                    <p>{index + 1}</p>
                    <div key={data.id_gallery} className="table-body-contain">
                      <img
                        src={data.url_foto}
                        alt=""
                        className="table-body-contain-img"
                      />
                    </div>
                    <div className="mempelai-gallery-main-list-action-btn">
                      <button className="edit">Ganti</button>
                      <button
                        className="delete"
                        onClick={() => deleteGallery(data.id_gallery)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* <div className="mempelai-next">
        <Link to={`/edit/3/${id_undangan}`} className="mempelai-next-button">
          Next
        </Link>
      </div> */}
    </div>
  );
};

<<<<<<< HEAD
export default Mempelai;
=======
export default Mempelai;
>>>>>>> 8547a02 (add handle update)

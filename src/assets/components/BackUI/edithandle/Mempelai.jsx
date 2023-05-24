import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Mempelai() {
  return (
    <div className="mempelai">
      <form>
        <div className="mempelai-form">
          <h1>Data Pasangan</h1>
          <div className="mempelai-form-cover">
            <h2>foto cover berdua</h2>
            <div className="mempelai-form-cover-upload">
              <h3>upload foto cover</h3>
              <p>JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>
          <div className="mempelai-form-keluarga">
            <h2>mempelai pria</h2>
            <div className="mempelai-form-keluarga-upload">
              <h3>upload foto pria</h3>
              <p>JPG, GIF or PNG. Max size of 800K</p>
            </div>
            <div className="mempelai-form-keluarga-data">
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama panggilan pria</p>
                <input type="text" placeholder="Hanan" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama lengkap pria</p>
                <input type="text" placeholder="Hanan Ataki S.Kom" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ayah</p>
                <input type="text" placeholder="Bambang Rusdi" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ibu</p>
                <input type="text" placeholder="Yuni Ningsih" />
              </div>
            </div>
            <div className="mempelai-form-keluarga-sosmed">
              <p>Sosial Media</p>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsFacebook className="icon" />
                <input type="url" />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsInstagram className="icon" />
                <input type="url" />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsTwitter className="icon" />
                <input type="url" />
              </div>
            </div>
          </div>
          <div className="mempelai-form-keluarga">
            <h2>mempelai wanita</h2>
            <div className="mempelai-form-keluarga-upload">
              <h3>upload foto wanita</h3>
              <p>JPG, GIF or PNG. Max size of 800K</p>
            </div>
            <div className="mempelai-form-keluarga-data">
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama panggilan wanita</p>
                <input type="text" placeholder="Hanan" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama lengkap wanita</p>
                <input type="text" placeholder="Hanan Ataki S.Kom" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ayah</p>
                <input type="text" placeholder="Bambang Rusdi" />
              </div>
              <div className="mempelai-form-keluarga-data-pribadi">
                <p>Nama Ibu</p>
                <input type="text" placeholder="Yuni Ningsih" />
              </div>
            </div>
            <div className="mempelai-form-keluarga-sosmed">
              <p>Sosial Media</p>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsFacebook className="icon" />
                <input type="url" />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsInstagram className="icon" />
                <input type="url" />
              </div>
              <div className="mempelai-form-keluarga-sosmed-link">
                <BsTwitter className="icon" />
                <input type="url" />
              </div>
            </div>
          </div>
        </div>
        <div className="mempelai-kutipan">
          <h1>kutipan</h1>
          <div className="mempelai-kutipan-main">
            <input type="text" />
            <textarea></textarea>
          </div>
        </div>
        <div className="mempelai-gallery">  
          <h1>Gallery Pasangan</h1>
          <div className="mempelai-gallery-main">
            <h2>foto pasangan</h2>
            <div className="mempelai-gallery-main-upload">
              <h3>upload foto</h3>
              <p>JPG, GIF or PNG. Max size of 800K</p>
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
          <button className="mempelai-next-button">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Mempelai;

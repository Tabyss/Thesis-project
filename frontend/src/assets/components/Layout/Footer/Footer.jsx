import React from "react";
import "./footer.scss";
import Content1 from "../../../img/logo.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <img src={Content1} />
      <p>hubungi kami</p>
      <div className="footer-sosmed">
        <BsWhatsapp />
        <BsInstagram />
      </div>
      <i>Copyright @ 2023 Kartu Nikah</i>
    </div>
  );
}

export default Footer;

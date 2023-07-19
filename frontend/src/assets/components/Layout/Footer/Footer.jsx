import React from "react";
import "./footer.scss";
import Content1 from "../../../img/logo.png";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer" id="footer">
      <img src={Content1} />
      <p>hubungi kami</p>
      <div className="footer-sosmed">
        <a href="https://wa.me/6285819853560"><BsWhatsapp /></a>
        <a href="https://www.instagram.com/bntngfrd"><BsInstagram /></a>
      </div>
    </div>
  );
}

export default Footer;

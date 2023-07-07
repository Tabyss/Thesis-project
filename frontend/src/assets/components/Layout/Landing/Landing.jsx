import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Content1 from "../../../img/logo.png";
import Content2 from "../../../img/content-1.png";
import "./landing.scss";

export function Navbar() {
  const [click, setClick] = useState(false);

  const active = () => setClick(!click);

  function fixed() {
    let navbar = document.getElementById("navbar");
    let sc = window.scrollY;
    if (sc < 50) {
      navbar.classList.remove("fixed");
    } else {
      navbar.classList.add("fixed");
    }
  }
  window.addEventListener("scroll", fixed);

  return (
    <div id="navbar" className={click ? "navbar fixed" : "navbar"}>
      <div className="nav">
        <img src={Content1} />
        <div className="burger" onClick={active}>
          <button className={click ? "burger active" : "burger"}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={click ? "nav-link active" : "nav-link"}>
          <div className="nav-link-menu">
            <li>fitur</li>
            <li>tema</li>
            <li>customers</li>
          </div>
          <div className="nav-link-log">
            <NavLink to="/Sign-In" className="nav-link-log-in">
              Sign In
            </NavLink>
            <NavLink to="/sign-up" className="nav-link-log-up">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing">
        <img src={Content2} />
        <div className="landing-main">
          <h1>Lorem Ipsum is simply dummy text.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="landing-main-link">
            <button>contact us</button>
            <div className="landing-main-link-tema">
              <a>Coba Tema</a>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

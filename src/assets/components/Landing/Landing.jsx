import React from "react";
import Content1 from "../../img/logo.png";
import Content2 from "../../img/content-1.png";
import "./landing.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-link">
          <li>
            <img src={Content1} />
          </li>
          <li>fitur</li>
          <li>tema</li>
          <li>customers</li>
        </div>
        <div className="nav-main">
          <a href="" className="nav-main-in">
            Sign In
          </a>
          <a href="" className="nav-main-up">
            Sign Up
          </a>
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
        <div className="landing-content">
          <img src={Content2} />
        </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

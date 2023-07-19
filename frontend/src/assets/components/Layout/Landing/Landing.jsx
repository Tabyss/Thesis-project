import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import Content1 from "../../../img/logo.png";
import Content2 from "../../../img/content-1.png";
import "./landing.scss";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../BackUI/Handler/authSlicer";

export function Navbar({ opt }) {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 2dbbf24 (Fixing)

  // if (!user) {
  //     return null; // atau tampilkan pesan loading
  // }

  const active = () => setClick(!click);

  useEffect(() => {
    function fixed() {
      let navbar = document.getElementById("navbar");
      let sc = window.scrollY;
      if (sc < 50) {
        navbar.classList.remove("fixed");
      } else {
        navbar.classList.add("fixed");
      }
    }
    document.addEventListener("scroll", fixed);
    return () => {
      document.removeEventListener("scroll", fixed);
    };
  }, []);

  return (
    <div id="navbar" className={click ? "navbar fixed" : "navbar"}>
<<<<<<< HEAD
      {user ? (
        <div className="nav">
          <img className="nav-logo" src={Content1} />
          <div className="burger" onClick={active}>
            <button className={click ? "burger active" : "burger"}>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={click ? "nav-link active" : "nav-link"}>
            <div className="nav-link-menu">
            </div>
            <div className="nav-link-log">
              <li onClick={logout} className="nav-link-log-out">
                Log Out
              </li>
            </div>
          </div>
        </div>
      ) : (
        <div className="nav">
          <img className="nav-logo" src={Content1} />
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
=======
      <div className="nav">
        <img src={Content1} />
        <div className="burger" onClick={active}>
          <button className={click ? "burger active" : "burger"}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={click ? "nav-link active" : "nav-link"}>
          {user ? (
            <>
            <div className="nav-link-menu">
            </div>
            <div className="nav-link-log">
              <li onClick={logout} className="nav-link-log-out">Log Out</li>
            </div>
          </>
          ) : (
            <>
              <div className="nav-link-menu">
                <li><a href="#landing">home</a></li>
                <li><a href="#fitur">fitur</a></li>
                <li><a href="#tema">tema</a></li>
                <li><a href="#package">paket</a></li>
                <li><a href="#review">customers</a></li>
              </div>
              <div className="nav-link-log">
                <NavLink to="/Sign-In" className="nav-link-log-in">
                  Sign In
                </NavLink>
                <NavLink to="/sign-up" className="nav-link-log-up">
                  Sign Up
                </NavLink>
              </div>  
            </>
          )}
>>>>>>> 2dbbf24 (Fixing)
        </div>
      )}
    </div>
  );
}

function Landing() {
  return (
    <>
      <Navbar />
      <div className="landing" id="landing">
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
            <a href="#footer" className="button">contact us</a>
            <div className="landing-main-link-tema">
              <a href="#tema">Coba Tema</a>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;

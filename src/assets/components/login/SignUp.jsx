import React from "react";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./signup.scss";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <NavLink to="/">
        <img src={Content1} />
      </NavLink>
      <div className="signup-content">
        <div className="signup-content-title">
          <NavLink to="/" className="arrowback">
            <MdKeyboardArrowLeft />
          </NavLink>
          <h1>Signup</h1>
        </div>
        <form className="signup-content-value">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" defaultValue="+62" placeholder="Phone Number" />
          <div className="signup-content-value-button">
            <ImGoogle3 />
            <FaFacebook />
            <button>Signup</button>
          </div>
        </form>
        <div className="signup-content-regis">
          <p>
            Don't have account? <NavLink to="../login">Create an account.</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

import React from "react";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./signin.scss";
import { NavLink } from "react-router-dom";


function SignIn() {
  return (
    <div>
      <div className="signin">
        <NavLink to="/">
          <img src={Content1} />
        </NavLink>
        <div className="signin-content">
          <div className="signin-content-title">
            <NavLink to="/" className="arrowback">
              <MdKeyboardArrowLeft />
            </NavLink>
            <h1>Login</h1>
          </div>
          <form className="signin-content-value">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="signin-content-value-button">
              <ImGoogle3 />
              <FaFacebook />
              <button>Login</button>
            </div>
          </form>
          <div className="signin-content-regis">
            <p>
              Don't have account?{" "}
              <NavLink to="../Sign-Up">Create an account.</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

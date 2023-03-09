import React from "react";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./login.scss";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <NavLink to="/">
        <img src={Content1} />
      </NavLink>
      <div className="login-content">
        <div className="login-content-title">
          <NavLink to="/" className="arrowback">
            <MdKeyboardArrowLeft />
          </NavLink>
          <h1>Login</h1>
        </div>
        <form className="login-content-value">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="login-content-value-button">
            <ImGoogle3 />
            <FaFacebook />
            <button>Login</button>
          </div>
        </form>
        <div className="login-content-regis">
          <p>
            Don't have account? <NavLink to="../signup">Create an account.</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

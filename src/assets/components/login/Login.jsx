import React from "react";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./login.scss";

function Login() {
  return (
    <div className="login">
      <img src={Content1} />
      <div className="login-title">
        <MdKeyboardArrowLeft />
        <h1>Login</h1>
      </div>
      <form className="login-value">
        <input type="text" defaultValue="Username" />
        <input type="text" defaultValue="Password" />
        <div className="login-value-option">
          <ImGoogle3 />
          <FaFacebook />
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;

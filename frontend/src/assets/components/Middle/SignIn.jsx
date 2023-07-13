import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../BackUI/Handler/authSlicer";
// import axios from "axios";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./signin.scss";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if(user || isSuccess){
      navigate(`/dashboard`);
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({email, password}));
  }

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
          <form onSubmit={Auth} className="signin-content-value">
            {isError && <p>{message}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="signin-content-value-button">
              <button type="submit">
                {isLoading ? "Loading..." : "Login"}</button>
            </div>
          </form>
          <div className="signin-content-regis">
            <p>
              Don't have account?{" "}
              <NavLink to="/Sign-Up">Create an account.</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

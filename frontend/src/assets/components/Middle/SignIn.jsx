import React, {useState} from "react";
import axios from "axios";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./signin.scss";
import { NavLink,useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const Login = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login',{
        email: email,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      if(error.response) {
        console.log(error.response.data.msg);
        setMsg(error.response.data.msg);
      }
    }
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
          <form onSubmit={ Login } className="signin-content-value">
            <p>{msg}</p>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="signin-content-value-button">
              <ImGoogle3 />
              <FaFacebook />
              <button>Login</button>
            </div>
          </form>
          <div className="signin-content-regis">
            <p>
              Don't have account?{" "}
              <NavLink to="../register">Create an account.</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

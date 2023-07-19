import React, { useState } from "react";
import axios from "axios";
import Content1 from "../../img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ImGoogle3 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import "./signup.scss";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');

  const Register = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/user',{
        username: username,
        email: email,
        password: password,
        no_telp: noTelp
      });
      navigate("/Sign-In");
    } catch (error) {
      if(error.response) {
        // console.log(error.response.data);
        setMsg(error.response.data.msg);
      }
    }
  }

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
        <form onSubmit={ Register } className="signup-content-value">
          <p>{msg}</p>
          <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="Phone Number" required value={noTelp} onChange={(e) => setNoTelp(e.target.value)} />
          <div className="signup-content-value-button">
            <button>Signup</button>
          </div>
        </form>
        <div className="signup-content-regis">
          <p>
          Have account? <NavLink to="../Sign-In">Log In.</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

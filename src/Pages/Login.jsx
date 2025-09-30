import React from "react";
import "./Auth.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="switch-text">
          Don’t have an account? <a className="route" onClick={() => navigate("/auth2")}>Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

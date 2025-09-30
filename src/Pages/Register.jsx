import React from "react";
import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p className="switch-text">
          Already have an account? <a href="/auth">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

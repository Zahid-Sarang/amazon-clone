import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="logo"
        />
      </Link>

      <div className="login__container">
          <h1>Sign-In</h1>
          <form>
              <h5>E-mail</h5>
              <input type="text" placeholder="example@gmail.com" />
              <h5>Password</h5>
              <input type="password" placeholder="Enter Correct Password"/>
              <button type="submit" className="login__sign-in">Sign-In</button>
          </form>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
          <button className="login__sign-up">Create your Amazon Account</button>

      </div>
    </div>
  );
};

export default Login;

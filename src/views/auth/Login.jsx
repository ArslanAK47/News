import React from "react";
import Mark from "./Mark";
import "../../assests/styles/auth.scss";
import { Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="auth">
      <div className="login">
        <div className="login-mark-div">
          <Mark />
        </div>
        <div className="login-info-div">
          <div className="login-info-div-x-space"></div>
          <div className="login-info-main-div">
            <div className="login-info-main-top-space"></div>
            <span className="login-title auth-title">Log In</span>
            <div className="login-item-space-half" />
            <span className="login-text auth-text">Welcome Back!</span>
            <div className="login-item-space" />
            <Input placeholder="Username" className="auth-input login-input" />
            <div className="login-item-space" />
            <Input
              placeholder="Password"
              className="auth-input login-input"
              type="password"
            />
            <div className="login-item-space-half" />
            <div className="login-agree">
              {" "}
              <span className="auth-text" style={{ fontSize: "16px" }}>
                *By Logging in you agree to the
                <span className="auth-text-black" style={{ fontSize: "16px" }}>
                  Terms and Conditions
                </span>
              </span>
            </div>
            <div className="login-item-space-half" />
            <Button
              className="auth-button login-button"
              onClick={() => navigate("/")}
            >
              Login
            </Button>
            <div className="login-item-space-half" />
            <span className="login-account-question auth-text">
              Need an account?
              <Link className="auth-text-black" to="/signup">
                Sign Up{" "}
              </Link>
            </span>
            <div className="login-item-space-half" />
            <Link
              className="login-account-question auth-text-black"
              to="/resetpwd"
            >
              Forgot Password?{" "}
            </Link>
            <div className="login-info-main-bottom-space"></div>
          </div>
          <div className="login-info-div-x-space"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;

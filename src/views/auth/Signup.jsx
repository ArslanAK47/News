import React, { useState } from "react";
import Mark from "./Mark";
import "../../assests/styles/auth.scss";
import { Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const [signupStep, setSignupStep] = useState(0);
  return (
    <div className="auth auth-signup">
      <div className="signup">
        <div className="signup-info-div">
          <div className="signup-info-div-x-space"></div>
          <div className="signup-info-main-div">
            <div className="signup-info-main-top-space"></div>
            <span className="signup-title auth-title">Sign up</span>
            <div className="signup-item-space-half" />
            {signupStep === 0 ? (
              <>
                <span className="signup-text auth-text">
                  Access everything we have to offer!
                </span>
                <div className="signup-item-space" />
                <Input
                  placeholder="Username"
                  className="auth-input signup-input"
                />
                <div className="signup-item-space" />
                <Input
                  placeholder="Email Address"
                  className="auth-input signup-input"
                />
                <div className="signup-item-space" />
                <Input
                  placeholder="Password"
                  className="auth-input signup-input"
                  type="password"
                />
                <div className="signup-item-space" />
                <Input
                  placeholder="Confirm Password"
                  className="auth-input signup-input"
                  type="password"
                />
                <div className="signup-item-space-half" />
                <Button
                  className="auth-button signup-button"
                  onClick={() => setSignupStep(1)}
                >
                  Sign Up
                </Button>
                <div className="signup-item-space-half" />
                <div className="signup-agree">
                  {" "}
                  <Input type="checkbox" className="auth-checkbox"></Input>
                  <span className="auth-text">
                    I agree to the{" "}
                    <span className="auth-text-black">
                      terms and conditions
                    </span>
                  </span>
                </div>
                <div className="signup-item-space-half" />
                <span className="signup-account-question auth-text">
                  Already have an account?
                  <Link className="auth-text-black" to="/login">
                    Log in{" "}
                  </Link>
                </span>
                <div className="signup-info-main-bottom-space"></div>
              </>
            ) : (
              <>
                <span className="signup-text auth-text">Verify your email</span>
                <div className="signup-item-space" />
                <Input
                  placeholder="Confirm Password"
                  className="auth-input signup-input"
                  type="password"
                />
                <div className="signup-item-space-half" />
                <Button
                  className="auth-button signup-button"
                  onClick={() => {
                    setSignupStep(0);
                    navigate("/login");
                    // window.location.reload();
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}{" "}
          </div>
          <div className="signup-info-div-x-space"></div>
        </div>
        <div className="signup-mark-div">
          <Mark />
        </div>
      </div>
    </div>
  );
}

export default Signup;

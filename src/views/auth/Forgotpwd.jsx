import React, { useState } from "react";
import Mark from "./Mark";
import "../../assests/styles/auth.scss";
import { Button, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Forgotpwd(props) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  return (
    <div className="auth">
      <div className="forgotpwd">
        <div className="forgotpwd-mark-div">
          <Mark />
        </div>
        <div className="forgotpwd-info-div">
          <div className="forgotpwd-info-div-x-space"></div>
          <div className="forgotpwd-info-main-div">
            <div className="forgotpwd-info-main-top-space"></div>
            <span className="forgotpwd-title auth-title">
              Forgot Password ({page ? page : 3}/3)
            </span>
            <div className="forgotpwd-item-space-half" />
            <span className="forgotpwd-text auth-text">
              {page === 1
                ? "Let’s see what we can do!"
                : page === 2
                ? "We have sent you a confirmation email"
                : "New password"}
            </span>
            <div className="forgotpwd-item-space" />
            {page === 1 ? (
              <Input
                placeholder="Email or Username"
                className="auth-input forgotpwd-input"
              />
            ) : page === 2 ? (
              <Input
                placeholder="Enter Code"
                className="auth-input forgotpwd-input"
              />
            ) : (
              <>
                <Input
                  placeholder="Enter Password"
                  className="auth-input forgotpwd-input"
                  type="password"
                />
                <div className="forgotpwd-item-space" />
                <Input
                  placeholder="Verify Password"
                  className="auth-input forgotpwd-input"
                  type="password"
                />
              </>
            )}
            <div className="forgotpwd-item-space-half" />
            <Button
              className="auth-button forgotpwd-button"
              onClick={() => {
                setPage((page + 1) % 3);
                page === 2 ? navigate("/") : console.log("continue");
              }}
            >
              {page ? "Next" : "Submit"}
            </Button>
            <div className="forgotpwd-item-space-half" />
            <span className="forgotpwd-account-question auth-text">
              Need an account?
              <Link className="auth-text-black" to="/signup">
                Sign Up{" "}
              </Link>
            </span>
            <div className="forgotpwd-item-space-half" />
            <span className="forgotpwd-account-question auth-text">
              Already have an account?
              <Link className="auth-text-black" to="/login">
                Log In{" "}
              </Link>
            </span>
            <div className="forgotpwd-info-main-bottom-space"></div>
          </div>
          <div className="forgotpwd-info-div-x-space"></div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpwd;

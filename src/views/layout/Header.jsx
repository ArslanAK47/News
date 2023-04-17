import React from "react";
import "../../assests/styles/layout.scss";
import logoMarkTopImg from "../../assests/image/logo-mark-top.png";
import logoMarkDownImg from "../../assests/image/logo-mark-down.png";
import { ReactComponent as Group2 } from "../../assests/image/Group1.svg";

import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="logo" onClick={() => navigate("/")}>
        <div className="logo-mark">
          <Group2 />
          {/* <img className="top" src={logoMarkTopImg} />
          <img className="down" src={logoMarkDownImg} /> */}
        </div>
        <p className="logo-content">NewsFlash</p>
      </div>
      <div className="nav-link">
        <div className="link1">Home</div>
        <div className="link2">About us</div>
        <div className="link3">Contact</div>
      </div>
      <div className="sign">
        <span
          onClick={() => {
            navigate("/login");
            // window.location.reload();
          }}
          className="sign-in-button">
          Sign in
        </span>
        <span
          onClick={() => {
            navigate("/signup");
            // window.location.reload();
          }}
          className="sign-up-button">
          Sign up
        </span>
      </div>
    </div>
  );
}

export default Header;

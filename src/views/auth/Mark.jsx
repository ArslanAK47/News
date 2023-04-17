import React from "react";
import "../../assests/styles/auth.scss";
import authMarkTopImg from "../../assests/image/auth-mark-top.png";
import authMarkDownImg from "../../assests/image/auth-mark-down.png";

function Mark(props) {
  return (
    <div className="auth-mark">
      <img className="top" src={authMarkTopImg} />
      <img className="down" src={authMarkDownImg} />
      <div className="auth-mark-title-div">
        <span className="auth-mark-title-start">Your News </span>
        <span className="auth-mark-title-end">- In a</span>
      </div>
    </div>
  );
}

export default Mark;

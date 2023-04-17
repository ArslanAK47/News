import React from "react";
import { Button, Input } from "reactstrap";
import "../../assests/styles/layout.scss";
import logoMarkTopImg from "../../assests/image/footer-logo-mark-top.png";
import logoMarkDownImg from "../../assests/image/footer-logo-mark-down.png";
import { ReactComponent as Logo } from "../../assests/image/Group2.svg";
import ImgContentBg from "../../assests/image/footershapebg.png";
import CookieBanner from "../components/CookieBanner";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer">
      <img className="shapeBg" src={ImgContentBg} alt="shapeBg" />
      <div className="main">
        <div className="footer-link left">
          <span className="footer-link-title">Links</span>
          <div className="footer-link-body">
            <Link className="footer-text-link link-new-account">
              Create An Account
            </Link>
            <Link className="footer-text-link link-glance">At a Glance</Link>
            <Link className="footer-text-link link-about">About </Link>
            <Link className="footer-text-link link-contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="right">
          <div className="footer-subs">
            <span className="footer-subs-title">
              Stay up to date with our Newsletter!
            </span>
            <div className="footer-subs-bar">
              <input className="subs-input" placeholder="Your email" />

              <Button className="subs-button">I'm in</Button>
            </div>
          </div>
          <div className="footer-logo">
            <div className="logo-mark">
              <Logo />
              <p className="logo-content">NewsFlash</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <div className="footer-text-body body-all-rights-reserved">
          <span className="text-footer text-all-rights-reserved">
            All rights reserved.
          </span>
        </div>
        <div className="footer-text-body body-legal-doc-thingy">
          <span className="text-footer text-legal-doc-thingy">
            Legal Doc Thingy
          </span>
        </div>
        <div className="footer-text-body body-terms">
          <span className="text-footer text-terms">Terms</span>
        </div>
        <div className="footer-text-body body-privacy-policy">
          <span className="text-footer text-privacy-policy">
            Privacy policy
          </span>
        </div>
      </div>
      <CookieBanner />
    </div>
  );
}

export default Footer;

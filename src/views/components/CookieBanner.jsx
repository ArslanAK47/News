import { Link } from "react-router-dom";
import "../../assests/styles/layout.scss";
const CookieBanner = () => {
  return (
    <div className="Banner">
      <span className="classBannerText">
        We use our own and third-party cookies to personalize content and to
        analyze web traffic.
        <Link style={{ color: "white" }}>Read more about cookies</Link>
      </span>
      <div className="sign">
        <span className="sign-in-button">Sign in</span>
        <span className="sign-up-button">Sign up</span>
      </div>
    </div>
  );
};

export default CookieBanner;

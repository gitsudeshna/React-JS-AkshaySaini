import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginButton, setLoginButton] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo image" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contant Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              setLoginButton(loginButton == "login" ? "logout" : "login")
            }
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

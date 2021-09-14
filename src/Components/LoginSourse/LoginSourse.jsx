import React from "react";
import "../LoginSourse/LoginSourse.scss";
import useToken from "../../Hooks/useToken";
// import useTheme from "../../Hooks/useTheme";
// import { ContextLang } from "../../Context/Language";

import Logo from "../../Assets/Images/twitter-logo.png";

function Loginn() {
  const [setToken] = useToken(true);
  // const [tema] = useTheme();
  // const { lng } = React.useContext(ContextLang);

  return (
    <>
      <div className="login_box">
        <img className="logoo" src={Logo} alt="logo" />
        <h1 className="heading">Log in to Twitter</h1>
        <form className="login-form" onSubmit={() => setToken("Emenim")}>
          <input
            className="login_input"
            type="email"
            placeholder="Phone number, email address"
            required
          />
          <input
            className="login_input"
            type="password"
            placeholder="Password"
            required
          />
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <div className="login_link">
          <a
            className="login-link"
            href="https://app.netlify.com/sites/music-apii/overview">
            Forgot password?
          </a>
          <a
            className="login-link"
            href="https://app.netlify.com/sites/music-apii/overview">
            Sign up to Twitter
          </a>
        </div>
      </div>
    </>
  );
}
export default Loginn;

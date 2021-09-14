import React from "react";
import "./Contact.scss";
import useTheme from "../../Hooks/useTheme";
import content from "../../Localization/Content";
import { ContextLang } from "../../Context/Language";
import { NavLink } from "react-router-dom";

import Logo from "../../Assets/Images/twitter-logo.png";
import Home from "../../Assets/Images/home.png";
import Explore from "../../Assets/Images/explore.png";
import Notifications from "../../Assets/Images/notifications.png";
import Messages from "../../Assets/Images/messages.png";
import Bookmarks from "../../Assets/Images/bookmark.png";
import Lists from "../../Assets/Images/lists.png";
import Profile from "../../Assets/Images/profile.png";
import More from "../../Assets/Images/more.png";
import ProfileImg from "../../Assets/Images/kamina1.jpg";
import Dot from "../../Assets/Images/dot.png";

function Contact() {
  const [tema] = useTheme();
  const { lng } = React.useContext(ContextLang);

  return (
    <nav className={`contact-box ${tema}`}>
      <ul className="conatact-list">
        <li className="contact-item">
          <img className="logo" src={Logo} alt="logo" />
        </li>
        <li className="contact-item">
          <img src={Home} alt="logo" width="26" height="23.62" />
          <NavLink className="heading-contact" to="/">
            <h3>{content[lng].home}</h3>
          </NavLink>
        </li>
        <li className="contact-item">
          <img src={Explore} alt="logo" width="23" />
          <h3 className="heading_contact">{content[lng].explore}</h3>
        </li>
        <li className="contact-item">
          <img src={Notifications} alt="logo" width="23" />
          <h3 className="heading_contact">{content[lng].notification}</h3>
        </li>
        <li className="contact-item">
          <img src={Messages} alt="logo" width="23" height="21" />
          <h3 className="heading_contact">{content[lng].messages}</h3>
        </li>
        <li className="contact-item">
          <img src={Bookmarks} alt="logo" width="20,18" height="23,51" />
          <h3 className="heading_contact">{content[lng].bookmarks}</h3>
        </li>
        <li className="contact-item">
          <img src={Lists} alt="logo" width="23" height="23" />
          <h3 className="heading_contact">{content[lng].lists}</h3>
        </li>
        <li className="contact-item">
          <img src={Profile} alt="logo" width="20" height="24" />
          <NavLink className="heading-contact" to="/profile">
            <h3>{content[lng].profile}</h3>
          </NavLink>
        </li>
        <li className="contact-item">
          <img src={More} alt="logo" width="25" />
          <h3 className="heading_contact">{content[lng].more}</h3>
        </li>
      </ul>
      <div>
        <button className="contact_btn">Tweet</button>
        <div className="profile-box">
          <img
            className="profile"
            src={ProfileImg}
            alt="profile"
            width="100"
            height="100"
          />
          <div className="profile_heading">
            <h4 className="profile_heading">Bekmirza</h4>
            <p className="setting-p">@bekmirza_yoqubov</p>
          </div>
          <img className="dot" src={Dot} alt="dot" />
        </div>
      </div>
    </nav>
  );
}
export default Contact;

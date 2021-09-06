import React from "react";
import "./Search.scss";
import useTheme from "../../Hooks/useTheme";
import { ContextLang } from "../../Context/Language";
import content from "../../Localization/Content";

import SearchImg from "../../Assets/Images/search.png";
import Dot from "../../Assets/Images/dot.png";
import Settings from "../../Assets/Images/settings.png";
import Profile5 from "../../Assets/Images/mushtariy.png";
import Profile6 from "../../Assets/Images/shuhrat.png";

function Search() {
  const [tema] = useTheme();
  const { lng } = React.useContext(ContextLang);
  return (
    <div className={`search-box ${tema}`}>
      <div>
        <label className="search_label">
          <img src={SearchImg} alt="search" />
          <input
            className="search_input"
            type="text"
            placeholder={content[lng].search}
          />
        </label>
        <div className={"setting"}>
          <div className="setting-box">
            <h2>{content[lng].trend}</h2>
            <img src={Settings} alt="settings" />
          </div>
          <div className="setting-box">
            <div>
              <p className="setting-p">{content[lng].trending}</p>
              <h4 className="heading-p">{content[lng].revalution}</h4>
              <p className="setting-p">50.4K Tweets</p>
            </div>
            <img src={Dot} alt="dot" />
          </div>
          <div className="setting-box">
            <div>
              <p className="setting-p">{content[lng].trending}</p>
              <h4 className="heading-p">{content[lng].revalution}</h4>
              <p className="setting-p">50.4K Tweets</p>
            </div>
            <img src={Dot} alt="dot" />
          </div>
          <div className="setting-box">
            <div>
              <p className="setting-p">{content[lng].trending}</p>
              <h4 className="heading-p">{content[lng].revalution}</h4>
              <p className="setting-p">50.4K Tweets</p>
            </div>
            <img src={Dot} alt="dot" />
          </div>
          <a
            className="link"
            href="https://github.com/bekmirza-pro/Twetter_React_app">
            {content[lng].koproq}
          </a>
        </div>
      </div>
      <div>
        <div className="setting">
          <h1 className="profile_box"> {content[lng].like}</h1>
          <div className="setting-box">
            <div className="box">
              <img className="profile_img" src={Profile5} alt="mushtariy" />
              <div className="profile_btn">
                <h4 className="heading-p">Mushtariy </h4>
                <p className="setting-p">@Mushtar565266</p>
              </div>
            </div>
            <button className="follow_btn"> {content[lng].follow}</button>
          </div>
          <div className="setting-box">
            <div className="box">
              <img className="profile_img" src={Profile6} alt="mushtariy" />
              <div>
                <h4 className="heading-p">Shuhratbek</h4>
                <p className="setting-p">@mrshukhrat</p>
              </div>
            </div>
            <button className="follow_btn">{content[lng].follow}</button>
          </div>
          <a
            className="link"
            href="https://github.com/bekmirza-pro/Twetter_React_app">
            {content[lng].koproq}
          </a>
        </div>
        <div className="last-p">
          <p className="last_p">{content[lng].paragraf}</p>
          <p className="last_p">{content[lng].paragraf2}</p>
        </div>
      </div>
    </div>
  );
}
export default Search;

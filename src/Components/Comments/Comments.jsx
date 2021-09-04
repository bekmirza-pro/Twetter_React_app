import React from "react";
import "./Comments.scss";
import useTheme from "../../Hooks/useTheme";
import { ContextLang } from "../../Context/Language";

import ProfileImg from "../../Assets/Images/kamina1.jpg";
import Img from "../../Assets/Images/img.png";
import Gif from "../../Assets/Images/gif.png";
import Diagramma from "../../Assets/Images/diagramma.png";
import Smile from "../../Assets/Images/smile.png";
import Time from "../../Assets/Images/time.png";
import Profile from "../../Assets/Images/profile1.png";
import Profile2 from "../../Assets/Images/profile2.png";
import Profile3 from "../../Assets/Images/profile3.png";
import Dot from "../../Assets/Images/dot.png";
import Kabob from "../../Assets/Images/kabab.png";
import Star from "../Lib/Svg/Star";

import Commit from "../../Assets/Images/commit.png";
import Line from "../../Assets/Images/line.png";
import Hard from "../../Assets/Images/hard.png";
import Vektor from "../../Assets/Images/vektor4.png";
import Diagramma2 from "../../Assets/Images/diagramma2.png";

function Comments() {
  const [tema, ColorTema] = useTheme();
  const { lng, setLang } = React.useContext(ContextLang);

  return (
    <div className="comments-section">
      <div className={`theme ${tema}`}>
        <div className="home-box">
          <h2 className="home">Home</h2>
          <div className="theme-box">
            <select
              onChange={(evt) => {
                setLang(evt.target.value);
              }}
              value={lng}>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
            <div
              onClick={() => {
                if (tema === "light") {
                  ColorTema("dark");
                } else {
                  ColorTema("light");
                }
              }}>
              <button>
                <Star />
              </button>
            </div>
          </div>
        </div>
        <div className="comments-box">
          <div className="heppening">
            <img
              className="profile"
              src={ProfileImg}
              alt="profile"
              width="100"
              height="100"
            />
            <p className="p">What’s happening</p>
          </div>
          <div className="smile-box">
            <div className="smile-small-_box">
              <img src={Img} alt="img" />
              <img className="smile_img" src={Gif} alt="img" />
              <img className="smile_img" src={Diagramma} alt="img" />
              <img className="smile_img" src={Smile} alt="img" />
              <img className="smile_img" src={Time} alt="img" />
            </div>
            <button className="comments_btn">Tweet</button>
          </div>
        </div>
        <div className="comment_box">
          <div className="box">
            <img src={Profile} alt="profile" />
            <div>
              <div className="name-box">
                <div className="box">
                  <h4 className="heading-p">Designsta</h4>
                  <span className="setting-p">@inner · 25m</span>
                </div>
                <img className="dott" src={Dot} alt="dot" />
              </div>
              <p className="paragraf">
                Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                zerikmadinglarmi?
              </p>
            </div>
          </div>
          <div className="pragnoz">
            <div className="stiker_img">
              <img src={Commit} alt="commit" />
              <span className="number">10</span>
            </div>
            <div className="stiker_img">
              <img src={Line} alt="commit" />
              <span className="number">1</span>
            </div>
            <div className="stiker_img">
              <img src={Hard} alt="commit" />
              <span className="number">8</span>
            </div>
            <div className="stiker_img">
              <img src={Vektor} alt="commit" />
              <span className="number">0</span>
            </div>
            <div className="stiker_img">
              <img src={Diagramma2} alt="commit" />
              <span className="number">0</span>
            </div>
          </div>
        </div>
        <div className="comment_box">
          <div className="box">
            <img src={Profile2} alt="profile" />
            <div>
              <div className="name-box">
                <div className="box">
                  <h4 className="heading-p">cloutexhibition</h4>
                  <span className="setting-p">@RajLahoti · 22m</span>
                </div>
                <img className="dott" src={Dot} alt="dot" />
              </div>
              <p className="paragraf">
                YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
                ko’rib hursand bo’ladi odam.
              </p>
            </div>
          </div>
          <div className="pragnoz">
            <div className="stiker_img">
              <img src={Commit} alt="commit" />
              <span className="number">10</span>
            </div>
            <div className="stiker_img">
              <img src={Line} alt="commit" />
              <span className="number">1</span>
            </div>
            <div className="stiker_img">
              <img src={Hard} alt="commit" />
              <span className="number">8</span>
            </div>
            <div className="stiker_img">
              <img src={Vektor} alt="commit" />
              <span className="number">0</span>
            </div>
            <div className="stiker_img">
              <img src={Diagramma2} alt="commit" />
              <span className="number">0</span>
            </div>
          </div>
        </div>
        <div className="comment_boxx">
          <div className="box">
            <img src={Profile3} alt="profile" />
            <div>
              <div className="name-box">
                <div className="box">
                  <h4 className="heading-p">CreativePhoto</h4>
                  <span className="setting-p">@cloutexhibition · 1h</span>
                </div>
                <img className="dott" src={Dot} alt="dot" />
              </div>
              <p className="paragraf">
                Обетда..... <br /> Кечиринглар
              </p>
            </div>
          </div>
          <img className="kabab" src={Kabob} alt="" />
          <div className="pragnoz">
            <div className="stiker_img">
              <img src={Commit} alt="commit" />
              <span className="number">10</span>
            </div>
            <div className="stiker_img">
              <img src={Line} alt="commit" />
              <span className="number">1</span>
            </div>
            <div className="stiker_img">
              <img src={Hard} alt="commit" />
              <span className="number">8</span>
            </div>
            <div className="stiker_img">
              <img src={Vektor} alt="commit" />
              <span className="number">0</span>
            </div>
            <div className="stiker_img">
              <img src={Diagramma2} alt="commit" />
              <span className="number">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comments;

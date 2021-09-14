import React from "react";
import "./Profiles.scss";
import useTheme from "../../Hooks/useTheme";
import { ContextLang } from "../../Context/Language";

import Dot from "../../Assets/Images/dot.png";
import Lines from "../../Assets/Images/line2.png";
import BoburImg from "../../Assets/Images/bobur.png";
import BoburImges from "../../Assets/Images/bobur-fhoto.png";
import Location from "../../Assets/Images/location.png";
import Scriptka from "../../Assets/Images/scriptka.png";
import Born from "../../Assets/Images/shar.png";
import Data from "../../Assets/Images/date.png";
import Bobur from "../../Assets/Images/Ellipse-bobur.png";
import BoburBg from "../../Assets/Images/bobur-bg.png";

import Commit from "../../Assets/Images/commit.png";
import Line from "../Lib/Svg/Line";
import TwetterLike from "../TwetterLike/TwetterLike";
import Vektor from "../../Assets/Images/vektor4.png";
import Diagramma2 from "../../Assets/Images/diagramma2.png";

function Profiles() {
  const [tema] = useTheme();
  const { lng } = React.useContext(ContextLang);

  return (
    <>
      <div className="profile_component">
        <div>
          <div className="border-box">
            <div className="user_number">
              <img src={Lines} alt="line" />
              <div>
                <h4 className="user_name">Bobur</h4>
                <span>1,070 Tweets</span>
              </div>
            </div>
            <img className="bg-img" src={BoburImg} alt="bobur" />
            <div className="edit_pro">
              <img className="bobur_img" src={BoburImges} alt="bobur" />
              <button className="button" type="button">
                Edit profile
              </button>
            </div>
            <div className="user-name">
              <h3 className="bobur_user">Bobur</h3>
              <span className="user-data">@bobur_mavlonov</span>
              <p>UX&UI designer at @abutechuz</p>
              <div className="data_box">
                <div className="data_small">
                  <img className="img_data" src={Location} alt="location" />
                  <span className="user-data">Mashag'daman</span>
                </div>
                <div className="data_small">
                  <img className="img_data" src={Scriptka} alt="location" />
                  <span className="user-data">t.me/boburjon_mavlonov</span>
                </div>
                <div className="data_small">
                  <img className="img_data" src={Born} alt="location" />
                  <span className="user-data">Born November 24, 2000</span>
                </div>
                <div className="data_small">
                  <img className="img_data" src={Data} alt="location" />
                  <span className="user-data">Joined May 2020</span>
                </div>
              </div>
              <span className="user_data">
                <span className="number-follow">67</span> Following
              </span>
              <span className="user-data">
                <span className="number-follow">47</span> Followers
              </span>
            </div>
            <div className="media">
              <span>Tweets</span>
              <span>Tweets & replies</span>
              <span>Media</span>
              <span>Likes</span>
            </div>
            <div className="comment_box">
              <div className="box">
                <img src={Bobur} alt="profile" />
                <div>
                  <div className="name-box">
                    <div className="box">
                      <h4 className="heading-p">Bobur</h4>
                      <span className="setting-p">@bobur_mavlonov · Apr 1</span>
                    </div>
                    <img className="dott" src={Dot} alt="dot" />
                  </div>
                  <p className="paragraf">
                    4-kursni tugatgunimcha kamida bitta biznesim bo'lishini,
                    uylanish uchun moddiy jihatdan to'la-to'kis tayyor
                    bo'lishni, sog'lik va jismoniy holatni normallashtirishni
                    reja qildim
                  </p>
                </div>
              </div>
              <div className="pragnoz">
                <div className="stiker_img">
                  <img src={Commit} alt="commit" />
                  <span className="number">10</span>
                </div>
                <div className="stiker_img">
                  <Line />
                  <span className="number">1</span>
                </div>
                <div className="stiker_img">
                  <TwetterLike />
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
                <img src={Bobur} alt="profile" />
                <div>
                  <div className="name-box">
                    <div className="box">
                      <h4 className="heading-p">Bobur</h4>
                      <span className="setting-p">@bobur_mavlonov · Apr 1</span>
                    </div>
                    <img className="dott" src={Dot} alt="dot" />
                  </div>
                  <p className="paragraf">
                    Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
                    deyayotganimizga qarab ham o'tirmaymiz. Bitta biznes trener
                    nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi
                    slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar
                    haqida emas.
                  </p>
                </div>
              </div>
              <div className="pragnoz">
                <div className="stiker_img">
                  <img src={Commit} alt="commit" />
                  <span className="number">10</span>
                </div>
                <div className="stiker_img">
                  <Line />
                  <span className="number">1</span>
                </div>
                <div className="stiker_img">
                  <TwetterLike />
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
          <div className="comment_boxx">
            <div className="box">
              <img src={Bobur} alt="profile" />
              <div>
                <div className="name-box">
                  <div className="box">
                    <h4 className="heading-p">Bobur</h4>
                    <span className="setting-p">@bobur_mavlonov</span>
                  </div>
                  <img className="dott" src={Dot} alt="dot" />
                </div>
                <p className="paragraf">A bo'pti maskamasman</p>
              </div>
            </div>
            <img className="kabab" src={BoburBg} alt="" />
            <div className="pragnoz">
              <div className="stiker_img">
                <img src={Commit} alt="commit" />
                <span className="number">10</span>
              </div>
              <div className="stiker_img">
                <Line />
                <span className="number">1</span>
              </div>
              <div className="stiker_img">
                <TwetterLike />
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
          </div>{" "}
        </div>
      </div>
    </>
  );
}
export default Profiles;

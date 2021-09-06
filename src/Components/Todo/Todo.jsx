import React from "react";
import "../Comments/Comments.scss";

import ProfileImg from "../../Assets/Images/kamina1.jpg";

import Dot from "../../Assets/Images/dot.png";

import Commit from "../../Assets/Images/commit.png";
import Line from "../Lib/Svg/Line";
import Hard from "../Lib/Svg/Hard";
import Vektor from "../../Assets/Images/vektor4.png";
import Diagramma2 from "../../Assets/Images/diagramma2.png";

function Todo({ title }) {
  return (
    <li className="commit-item">
      <div className="comment_box">
        <div className="box">
          <img
            className="profile"
            src={ProfileImg}
            alt="profile"
            width="100"
            height="100"
          />
          <div>
            <div className="name-box">
              <div className="box">
                <h4 className="heading-p">Bekmirza</h4>
                <span className="setting-p">@bekmirza_yoqubov</span>
              </div>
              <img className="dott" src={Dot} alt="dot" />
            </div>
            <p className="paragraf">{title}</p>
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
            <Hard />
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
    </li>
  );
}

export default Todo;

import React from "react";
import XButton from "../../core/XButton";
import { useSelector } from "react-redux";
import XProgressBar from "../../core/XProgressBar";
import "../../styles/about/xabout.scss";
import { AiOutlineFire, AiOutlineFieldTime } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import XMainHeadline from "../../core/XMainHeadline";

export default function XAbout({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];
  return (
    <>
      <div className="about" id="about">
        <div className="container_ofolio">
          <XMainHeadline title={"Обо мне"} />
          <div className="about-row">
            <div className="about-avatar">
              <img src={user.userAvatar} alt={user.userAvatar}></img>
            </div>
            <div className="about-body">
              <div className="rounded">
                <div className="about-body-content">
                  <div className="left">
                    <p>{user.aboutMe}</p>
                    <XButton name={"Показать CV"} src={user.cv} />
                  </div>
                  <div className="right">
                    {user.skills?.map((el) => {
                      return (
                        <div className="skiil-item" key={el.id}>
                          <div className="skill-header">
                            <h4 className="skill-header-left">{el.title}</h4>
                            <span className="skill-header-right">
                              {el.progress}%
                            </span>
                          </div>
                          <XProgressBar
                            type={"primary-main-bcg"}
                            width={"w100"}
                            size={"default-progres-bar"}
                            progressType={el.color}
                            progressWidth={`w${el.progress}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-70"></div>
          <div className="facts-section">
            <div className="facts-box">
              <div className="facts">
                <div className="fact-icon">
                  <AiOutlineFire />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">{user.projects.completed}</h3>
                  <p>Завершенных проекта</p>
                </div>
              </div>
            </div>
            <div className="facts-box">
              <div className="facts">
                <div className="fact-icon">
                  <FiCoffee />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">{user.projects.coffee}</h3>
                  <p>Чашки кофе</p>
                </div>
              </div>
            </div>
            <div className="facts-box">
              <div className="facts">
                <div className="fact-icon">
                  <BiCodeAlt />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">{user.projects.code}+</h3>
                  <p>Строк кода</p>
                </div>
              </div>
            </div>
            <div className="facts-box">
              <div className="facts">
                <div className="fact-icon">
                  <AiOutlineFieldTime />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">
                    {user.projects.yearsExperience}
                  </h3>
                  <p>Годы опыта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

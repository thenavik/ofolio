import React from "react";
import XButton from "../../core/XButton";
import XProgressBar from "../../core/XProgressBar";
import AboutAvatar from "../../styles/about/avatar-2.svg";
import "../../styles/about/xabout.scss";
import { AiOutlineFire, AiOutlineFieldTime } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

export default function XAbout() {
  return (
    <>
      <div className="about">
        <div className="container_ofolio">
          <h1 className="about-title">About Me</h1>
          <div className="row about-row">
            <div className="col_3 about-avatar">
              <img src={AboutAvatar}></img>
            </div>
            <div className="col_9 about-body">
              <div className="rounded">
                <div className="row about-body-content">
                  <div className="col_6 left">
                    <p>
                      I am Bolby Doe, web developer from London, United Kingdom.
                      I have rich experience in web site design and building and
                      customization, also I am good at WordPress.{" "}
                    </p>
                    <XButton name={"Download CV"} />
                  </div>
                  <div className="col_6 right">
                    <div className="skiil-item">
                      <div className="skill-header">
                        <h4 className="skill-header-left">HTML</h4>
                        <span className="skill-header-right">80%</span>
                      </div>
                      <XProgressBar
                        type={"primary-main-bcg"}
                        width={"w100"}
                        size={"default-progres-bar"}
                        progressType={"warning"}
                        progressWidth={"w80"}
                      />
                    </div>
                    <div className="skiil-item">
                      <div className="skill-header">
                        <h4 className="skill-header-left">JavaScript</h4>
                        <span className="skill-header-right">70%</span>
                      </div>
                      <XProgressBar
                        type={"primary-main-bcg"}
                        width={"w100"}
                        size={"default-progres-bar"}
                        progressType={"danger"}
                        progressWidth={"w70"}
                      />
                    </div>
                    <div className="skiil-item">
                      <div className="skill-header">
                        <h4 className="skill-header-left">CSS</h4>
                        <span className="skill-header-right">90%</span>
                      </div>
                      <XProgressBar
                        type={"primary-main-bcg"}
                        width={"w100"}
                        size={"default-progres-bar"}
                        progressType={"primary"}
                        progressWidth={"w90"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spacer-70"></div>
          <div className="row facts-section">
            <div className="col_3">
              <div className="facts">
                <div className="fact-icon">
                  <AiOutlineFire />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">198</h3>
                  <p>Projects completed</p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="facts">
                <div className="fact-icon">
                  <FiCoffee />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">5670</h3>
                  <p>Cup of coffee</p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="facts">
                <div className="fact-icon">
                  <BiCodeAlt />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">10300+</h3>
                  <p>String of code</p>
                </div>
              </div>
            </div>
            <div className="col_3">
              <div className="facts">
                <div className="fact-icon">
                  <AiOutlineFieldTime />
                </div>
                <div className="fact-detail">
                  <h3 className="fact-munber">2</h3>
                  <p>Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

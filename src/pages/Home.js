import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CgScrollV } from "react-icons/cg";
import ".././styles/home/xhome.scss";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XFooter from "../components/footer/XFooter";
import XHeader from "../components/Header/XHeader";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import XButton from "../core/XButton";
import ScrollGif from "../assets/Gif/scroll.gif";

export default function Home({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="home">
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <XHeader />
      <div className="container_ofolio">
        <div data-aos="fade-up">
          <div className="canvas__fon">
            <canvas id="canvasOne" width="900" height="520">
              Your browser does not support HTML5 canvas.
            </canvas>
          </div>
          <div className="home">
            <img
              src={user.userAvatar}
              className="user-avatar"
              alt={user.userAvatar}
            />
            <h1 className="user-name">{user.name}</h1>
            <span>{user.profession}</span>
            <ul className="social-icons">
              {user.social?.map((el) => {
                return (
                  <li className="icons" key={el.id}>
                    <a target="_blank" href={el.href}>
                      {el.icon}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* <button className="button">Контакты</button> */}
            <XButton name="Контакты" link={user.contact} />
            <div className="scroll">
              <p>Прокрутите вниз</p>
              <img
                className="scroll-gif"
                src={ScrollGif}
                alt="Scroll Down Gif"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XAbout page={page} />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XSkills page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XExperience page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XWork page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XFooter page={page} />
      </div>
    </div>
  );
}

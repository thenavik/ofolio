import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CgScrollV } from "react-icons/cg";
import ".././styles/home/xhome.scss";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XFooter from "../components/Footer/XFooter";
import XHeader from "../components/Header/XHeader";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="home">
      <XHeader />
      <div className="container_ofolio">
        <div data-aos="fade-up">
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
                    <a href={el.href}>{el.icon}</a>
                  </li>
                );
              })}
            </ul>
            <button className="button">Контакты</button>
            <div className="scroll">
              <p>Прокрутите вниз</p>
              <CgScrollV />
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

import React from "react";
import { FaWhatsapp, FaTelegram, FiGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import ".././styles/home/xhome.scss";
import AvatarIcon from ".././styles/home/avatar-1.svg";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XBlog from "../components/Blog/XBlog";
import XFooter from "../components/footer/XFooter";
// import Particles from "react-particles-js";

export default function Home() {
  return (
    <div>
      <div className="home">
        {/* <section>
          <Particles
            params={{
              particles: {
                shape: {
                  type: "images",
                  image: [
                    { src: "path/to/first/image.svg", height: 20, width: 20 },
                    { src: "path/to/second/image.jpg", height: 20, width: 20 },
                  ],
                },
              },
            }}
          />
        </section> */}
        <div className="container_ofolio">
          <img className="avatar" src={AvatarIcon} />
          <h1 className="user-name">Bolby Doe</h1>
          <span>I'm a frontend developer</span>
          <ul className="social-icons">
            <li className="icons">
              <a href="#">
                <FaWhatsapp />
              </a>
            </li>
            <li className="icons">
              <a href="#">
                <FaTelegram />
              </a>
            </li>
            <li className="icons">
              <a href="#">
                <AiOutlineGithub />
              </a>
            </li>
            <li className="icons">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="icons">
              <a href="#">
                <BsMessenger />
              </a>
            </li>
          </ul>
          <button className="button">Contact Me</button>
          <div className="scroll">
            <p>Scroll Down</p>
            <CgScrollV />
          </div>
        </div>
      </div>
      <XAbout />
      <XSkills />
      <XExperience />
      <XWork />
      <XBlog />
      <XFooter />
    </div>
  );
}

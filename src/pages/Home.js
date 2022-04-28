import React from "react";
import { FaWhatsapp, FaTelegram, FiGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import ".././styles/home/xhome.scss";
import AvatarIcon from ".././styles/home/avatar-1.svg";
import XAbout from "../components/About/XAbout";

export default function Home() {
  return (
    <div>
      <div className="container_ofolio">
        <div className="home">
          <img src={AvatarIcon} />
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
        </div>
      </div>
      <XAbout />
    </div>
  );
}

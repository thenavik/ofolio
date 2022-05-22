import React from "react";
import { useSelector } from "react-redux";
import "../../styles/home/xhome.scss";
import XButton from "../../core/XButton";
import ScrollGif from "../../assets/Gif/scroll.gif";

export default function Banner({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];

  return (
    <>
      <div className="container_ofolio" id="hero">
        <div data-aos="fade-up">
          <div className="canvas__fon"></div>
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
    </>
  );
}

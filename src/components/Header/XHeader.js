import React, { useState } from "react";
import "../../styles/header/xheader.scss";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OfolioLogo from "../Header/ofolio.png";

export default function XHeader() {
  const [activeTab, setActiveTab] = useState("");
  const [menu, setMenu] = useState(false);

  const handleClickMenu = (title) => {
    enableScroll();
    setActiveTab(title);
    setMenu(false);
  };

  const toggleMenu = () => {
    if (menu) {
      setMenu(false);
      enableScroll();
    } else {
      setMenu(true);
      disableScroll();
    }
  };

  const menuList = [
    { title: "Главная", href: "#home" },
    { title: "Обо мне", href: "#about" },
    { title: "Навыки", href: "#skills" },
    { title: "Работы", href: "#works" },
  ];

  const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
  };

  const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
  };

  return (
    <>
      <header className="header">
        <div className="container_ofolio">
          <nav className="navbar">
            <Link to="#" className="logo">
              <img src={OfolioLogo} alt={OfolioLogo}></img>
            </Link>
            <div className={menu ? "menu-icon activeMenuIcon" : "menu-icon"}>
              <BiMenuAltRight
                width={25}
                height={25}
                onClick={() => toggleMenu()}
              />
            </div>
            <div className="menu">
              <ul className="menu-list">
                {menuList?.map((el, i) => {
                  return (
                    <li
                      className="menu-item"
                      key={el.title + i}
                      onClick={() => {
                        handleClickMenu(el.title);
                        disableScroll();
                      }}
                    >
                      <a
                        href={el.href}
                        className={
                          activeTab !== el.title
                            ? "menu-link link"
                            : "menu-link active link"
                        }
                      >
                        {el.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={menu ? "mobile-menu activeMenu" : "mobile-menu"}>
              <ul className="mobile__menu-list">
                {menuList?.map((el, i) => {
                  return (
                    <li
                      className="mobile__menu-item"
                      key={el.title + i}
                      onClick={() => handleClickMenu(el.title)}
                    >
                      <a
                        href={el.href}
                        className={
                          activeTab !== el.title
                            ? "mobile__menu-link"
                            : "mobile__menu-link active"
                        }
                      >
                        {el.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

import React, { useState } from "react";
import "../../styles/header/xheader.scss";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";
import OfolioLogo from "../Header/ofolio.png";
import particls from "../../widgets/particls";

export default function XHeader() {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    enableScroll();
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
    { title: "Главная", href: "hero" },
    { title: "Обо мне", href: "about" },
    { title: "Навыки", href: "skills" },
    { title: "Работы", href: "works" },
  ];

  const disableScroll = () => {
    document.body.classList.add("stop-scrolling");
  };

  const enableScroll = () => {
    document.body.classList.remove("stop-scrolling");
  };
  setTimeout(() => {
    particls();
  });

  return (
    <>
      <header className="header">
        <div className="container_ofolio">
          <nav className="navbar">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="logo link"
            >
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
                        handleClickMenu();
                        enableScroll();
                      }}
                    >
                      <Link
                        activeClass="active"
                        to={el.href}
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        className="menu-link link"
                      >
                        {el.title}
                      </Link>
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
                      onClick={() => {
                        handleClickMenu();
                        enableScroll();
                      }}
                    >
                      <Link
                        activeClass="active"
                        to={el.href}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        className="menu-link link"
                      >
                        {el.title}
                      </Link>
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

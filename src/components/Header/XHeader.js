import React, { useState } from "react";
import "../../styles/header/xheader.scss";
import { Link } from "react-router-dom";
import OfolioLogo from "../Header/ofolio.png";

export default function XHeader() {
  const [activeTab, setActiveTab] = useState("");

  const handleClickMenu = (title) => {
    setActiveTab(title);
  };

  const menuList = [
    { title: "Главная", href: "#home" },
    { title: "Обо мне", href: "#about" },
    { title: "Навыки", href: "#skills" },
    { title: "Работы", href: "#works" },
  ];
  return (
    <>
      <header className="header">
        <div className="container_ofolio">
          <nav className="navbar">
            <Link to="#" className="logo">
              <img src={OfolioLogo} alt={OfolioLogo}></img>
            </Link>
            <div className="menu">
              <ul className="menu-list">
                {menuList?.map((el, i) => {
                  return (
                    <li
                      className="menu-item"
                      key={el.title + i}
                      onClick={() => handleClickMenu(el.title)}
                    >
                      <a
                        href={el.href}
                        className={
                          activeTab !== el.title
                            ? "menu-link"
                            : "menu-link active"
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

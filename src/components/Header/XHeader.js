import React from "react";
import "../../styles/header/xheader.scss";
import { Link } from "react-router-dom";
import OfolioLogo from "../Header/ofolio.png";

export default function XHeader() {
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
                <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Главная
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Обо мне
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Навыки
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Опыт
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Работы
                  </Link>
                </li>
                {/* <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Blog
                  </Link>
                </li> */}
                {/* <li className="menu-item">
                  <Link to="#" className="menu-link">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

import React from "react";
import "../../styles/header/xheader.scss";

export default function XHeader() {
  return (
    <>
      <header className="header">
        <div className="container_ofolio">
          <nav className="navbar">
            <a href=""> Logo.</a>
            <div className="menu">
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Skills
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Experience
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Works
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Blog
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

import React from "react";
import UiUxImg from "../styles/core/service-1.svg";
import "../styles/core/xcard.scss";

export default function XCard({ type, title, bodyText }) {
  return (
    <>
      <div className={"col_4 skill-box " + type}>
        <div className="skills-box-inner">
          <img src={UiUxImg}></img>
          <h3 className="skill-box-title">{title}</h3>
          <p className="skill-box-content">{bodyText}</p>
        </div>
      </div>
    </>
  );
}

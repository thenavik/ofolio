import React from "react";
import "../styles/core/xcard.scss";

export default function XCard({ type, title, bodyText, icon, classLink }) {
  return (
    <>
      <div className={"skill-box " + type + " " + classLink}>
        <div className="skills-box-inner">
          {/* <img src={icon} alt="icon card"></img> */}
          {icon}
          <h3 className="skill-box-title">{title}</h3>
          <p className="skill-box-content">{bodyText}</p>
        </div>
      </div>
    </>
  );
}

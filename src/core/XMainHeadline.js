import React from "react";
import DotsBcg from "../styles/mainheadline/dots-bg.svg";
import "../styles/mainheadline/xmainheadline.scss";

export default function XMainHeadline(props) {
  return (
    <>
      <h1 className="about-title">{props.title}</h1>
    </>
  );
}

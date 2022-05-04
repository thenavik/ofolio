import React from "react";
import "../styles/mainheadline/xmainheadline.scss";

export default function XMainHeadline(props) {
  return (
    <>
      <h1 className="about-title">{props.title}</h1>
    </>
  );
}

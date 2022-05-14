import React from "react";
import "../styles/core/xbutton.scss";

export default function XButton(props) {
  return (
    <>
      {props.src ? (
        <button className="btn-primary">
          <a href={props.src} download>
            {props.name}
          </a>
        </button>
      ) : (
        <button className="btn-primary">
          <a target="_blank" href={props.link}>
            {props.name}
          </a>
        </button>
      )}
    </>
  );
}

import React from "react";
import "../styles/core/xworksExample.scss";
import { GiClick } from "react-icons/gi";

export default function XWorkExample(props) {
  return (
    <>
      <div className="work">
        <a href={props.to} target="_blank">
          <img src={props.image} alt="icon" />
          <div className="overlay overlay-left">
            <div className="text">
              <h3 className="overlay-title">{props.title}</h3>
              <span>
                Нажмите, чтобы просмотреть <GiClick />
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

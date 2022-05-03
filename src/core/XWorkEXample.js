import React from "react";
import "../styles/core/xworksExample.scss";
import WrokImg from "../img/6.svg";
import { GiClick } from "react-icons/gi";

export default function XWorkExample(props) {
  return (
    <>
      <div className="work col_4">
        <a href="#">
          <img src={WrokImg} />
          <div className="overlay overlay-left">
            <div className="text">
              <h3 className="overlay-title">{props.projectName}</h3>
              <span>
                Click to view <GiClick />
              </span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

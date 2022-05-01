import React from "react";
import "../styles/core/xworksExample.scss";

export default function XWorkExample(props) {
  return (
    <>
      <div className="portfolio-block">
        <a href="#">
          <div className="portfolio">
            <div className="portfolio-body">{props.title}</div>
          </div>
        </a>
      </div>
    </>
  );
}

import React from "react";
import "../styles/core/xworksExample.scss";

export default function XWorkExample(props) {
  return (
    <>
      <div className="col_3 portfolio-block">
        <a href="#">
          <div className="portfolio">
            <div className="portfolio-body">{props.title}</div>
          </div>
        </a>
      </div>
    </>
  );
}

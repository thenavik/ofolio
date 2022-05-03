import React from "react";
import XButton from "../../core/XButton";
import XMainHeadline from "../../core/XMainHeadline";
import XWorkExample from "../../core/XWorkEXample";
import "../../styles/works/xworks.scss";

export default function XWork() {
  return (
    <>
      <div className="work-section">
        <div className="container_ofolio">
          <XMainHeadline title={"Recent Works"} />
          <div className="works-row">
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
            <XWorkExample projectName={"Work example #1"} />
          </div>
          <div className="load-more">
            <XButton name={"Load More"} />
          </div>
        </div>
      </div>
    </>
  );
}

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
            <XWorkExample title={"WORK 1"} />
            <XWorkExample title={"WORK 2"} />
            <XWorkExample title={"WORK 3"} />
            <XWorkExample title={"WORK 4"} />
            <XWorkExample title={"WORK 5"} />
            <XWorkExample title={"WORK 6"} />
          </div>
          <div className="load-more">
            <XButton name={"Load More"} />
          </div>
        </div>
      </div>
    </>
  );
}

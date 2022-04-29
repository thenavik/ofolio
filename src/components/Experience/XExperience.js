import React from "react";
import XExperienceBlock from "../../core/XExperienceBlock";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/experience/xexperience.scss";

export default function XExperience() {
  return (
    <>
      <div className="experience-section">
        <div className="container_ofolio">
          <XMainHeadline title={"Experience"} />
          <div className="experience-row">
            <XExperienceBlock />
          </div>
        </div>
      </div>
    </>
  );
}

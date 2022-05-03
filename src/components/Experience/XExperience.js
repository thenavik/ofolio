import React from "react";
import XExperienceBlock from "../../core/XExperienceBlock";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/experience/xexperience.scss";

export default function XExperience(props) {
  return (
    <>
      <div className="experience-section">
        <div className="container_ofolio">
          <XMainHeadline title={"Опыт работы"} />
          <div className="experience-row">
            <XExperienceBlock page={props.page} />
          </div>
        </div>
      </div>
    </>
  );
}

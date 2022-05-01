import React from "react";
import XCard from "../../core/XCard";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/skills/xskills.scss";

export default function XSkills() {
  return (
    <>
      <div className="skills">
        <div className="container_ofolio">
          <XMainHeadline title={"My Skills"} />
          <div className="skills-row">
            <XCard
              title={"UI/UX Designe"}
              bodyText={
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
              }
              type={"bg-blue"}
            />
            <XCard
              title={"UI/UX Designe"}
              bodyText={
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
              }
              type={"bg-yellow"}
            />
            <XCard
              title={"UI/UX Designe"}
              bodyText={
                "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget."
              }
              type={"bg-pink"}
            />
          </div>
          <div className="skills-cta">
            <p>
              Looking for a custom job? <a href="#">Click here</a> to contact
              me! 👋
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

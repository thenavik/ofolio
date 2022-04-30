import React from "react";
import Card from "./Card";
import "../../styles/dashboard/skills.scss";

export default function Experience() {
  return (
    <>
      <div className="row mt-2">
        <div className="box-left">
          <Card
            title={"Ключевые факты"}
            text={false}
            cardBody={<div className="skills-wrapper"></div>}
          />
        </div>
      </div>
    </>
  );
}

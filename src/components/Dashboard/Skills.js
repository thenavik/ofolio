import React, { useState } from "react";
import Card from "./Card";
import "../../styles/dashboard/skills.scss";

export default function Skills() {
  const [skill, setSkill] = useState([
    {
      title: "JavaScript",
    },
    {
      title: "React",
    },
    {
      title: "Node",
    },
    {
      title: "Scss",
    },
    {
      title: "Lass",
    },
    {
      title: "Html",
    },
    {
      title: "JavaScript",
    },
    {
      title: "React",
    },
    {
      title: "Node",
    },
    {
      title: "Scss",
    },
    {
      title: "Lass",
    },
    {
      title: "Html",
    },
  ]);
  return (
    <>
      <div className="row mt-2">
        <div className="box-left">
          <Card
            title={"Ключевые факты"}
            text={false}
            cardBody={
              <div className="skills-wrapper">
                <div className="skills__head">
                  <h4>Навыки</h4>
                </div>
                <div className="skills__body">
                  {skill?.map((el, i) => {
                    return (
                      <div className="skil" key={el.title + i}>
                        {el.title}
                      </div>
                    );
                  })}
                </div>
                <div className="skills__footer">
                  <h4>Языки</h4>
                  <span>
                    Английский : <p>A1 — Beginner / Elementary</p>
                  </span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}

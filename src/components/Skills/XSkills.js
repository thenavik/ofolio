import React from "react";
import XCard from "../../core/XCard";
import { useSelector } from "react-redux";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/skills/xskills.scss";

export default function XSkills({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];
  return (
    <>
      <div className="skills">
        <div className="container_ofolio">
          <XMainHeadline title={"My Skills"} />
          <div className="skills-row">
            {user.skillsMe?.map((el) => {
              return (
                <XCard
                  title={el.title}
                  bodyText={el.info}
                  type={el.color}
                  key={el.id}
                />
              );
            })}
          </div>
          <div className="skills-cta">
            <p>
              Ищете индивидуальную работу?{" "}
              <a href={user.contact} target="_blank">
                Нажмите здесь
              </a>{" "}
              чтобы связаться со мной! 👋
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

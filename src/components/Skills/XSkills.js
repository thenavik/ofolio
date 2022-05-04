import React from "react";
import XCard from "../../core/XCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/skills/xskills.scss";

export default function XSkills({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];
  return (
    <>
      <div className="skills" id="skills">
        <div className="container_ofolio">
          <XMainHeadline title="Мои навыки" />
          <div className="skills-row">
            {user.skillsMe?.map((el) => {
              return (
                <XCard
                  title={el.title}
                  type={el.color}
                  key={el.id}
                  icon={el.icon}
                />
              );
            })}
          </div>
          <div className="skills-cta">
            <p>
              Ищете индивидуальную работу?{" "}
              <Link to={user.contact} target="_blank">
                Нажмите здесь
              </Link>{" "}
              чтобы связаться со мной! 👋
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

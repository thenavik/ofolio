import React from "react";
import { useSelector } from "react-redux";
import "../styles/core/block.scss";

export default function XExperienceBlock(props) {
  const users = useSelector((state) => state.users);
  const user = users[props.page];

  return (
    <>
      <div className="bl-box">
        <div className="block-inner">
          {user.experience.work?.map((el) => {
            return (
              <div className="block-body" key={el.id}>
                <div className="block-icons">{el.icon}</div>
                <div className="block-content">
                  <span className="time">
                    {el.start}, {el.end}
                  </span>
                  <h3 className="block-title">{el.title}</h3>
                  <p className="block-text">{el.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bl-box">
        <div className="block-inner">
          {user.experience.studies?.map((el) => {
            return (
              <div className="block-body" key={el.id}>
                <div className="block-icons">{el.icon}</div>
                <div className="block-content">
                  <span className="time">
                    {el.start}, {el.end}
                  </span>
                  <h3 className="block-title">{el.title}</h3>
                  <p className="block-text">{el.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

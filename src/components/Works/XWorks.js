import React from "react";
import XButton from "../../core/XButton";
import { useSelector } from "react-redux";
import XMainHeadline from "../../core/XMainHeadline";
import XWorkExample from "../../core/XWorkEXample";
import "../../styles/works/xworks.scss";

export default function XWork(props) {
  const users = useSelector((state) => state.users);
  const user = users[props.page];
  return (
    <>
      <div className="work-section">
        <div className="container_ofolio">
          <XMainHeadline title={"Примеры работ"} />
          <div className="works-row">
            {user.works?.map((el) => {
              return (
                <XWorkExample
                  title={el.title}
                  image={el.image}
                  key={el.id}
                  to={el.href}
                />
              );
            })}
          </div>
          <div className="load-more">
            <XButton name={"Load More"} />
          </div>
        </div>
      </div>
    </>
  );
}

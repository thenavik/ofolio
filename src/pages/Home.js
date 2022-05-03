import React from "react";
import { useSelector } from "react-redux";
import ".././styles/home/xhome.scss";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XBlog from "../components/Blog/XBlog";
import XFooter from "../components/Footer/XFooter";

export default function Home({ page }) {
  const users = useSelector((state) => state.users);
  const user = users[page];
  return (
    <div>
      <div className="container_ofolio">
        <div className="home">
          <img src={user.userAvatar} />
          <h1 className="user-name">{user.name}</h1>
          <span>I'm a {user.profession} developer</span>
          <ul className="social-icons">
            {user.social?.map((el) => {
              return (
                <li className="icons" key={el.id}>
                  <a href={el.href}>{el.icon}</a>
                </li>
              );
            })}
          </ul>
          <button className="button">Contact Me</button>
        </div>
      </div>
      <XAbout page={page} />
      <XSkills page={page} />
      <XExperience page={page} />
      <XWork page={page} />
      <XBlog page={page} />
      <XFooter page={page} />
    </div>
  );
}

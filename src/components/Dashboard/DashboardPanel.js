import React from "react";
import Card from "./Card";
import "../../styles/dashboard/dashboard.scss";
import UserInfo from "./UserInfo";
import Skills from "./Skills";

export default function DashboardPanel() {
  return (
    <div className="admin">
      <div className="container_ofolio">
        <div className="admin__wrapper">
          <div className="head">
            <h2>Мой профиль</h2>
          </div>
          <UserInfo />
          <Skills />
        </div>
      </div>
    </div>
  );
}

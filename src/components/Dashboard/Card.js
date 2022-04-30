import React from "react";
import { FiEdit3 } from "react-icons/fi";
import "../../styles/dashboard/card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__head">
          <h4>
            {props.title}
            <span className="user__age">{props.text}</span>
          </h4>

          <div className="card__controll" onClick={() => props.onClick}>
            <FiEdit3 /> Редактировать
          </div>
        </div>
        {props.cardBody}
      </div>
    </div>
  );
}

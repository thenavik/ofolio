import React from "react";
import Card from "./Card";
import "../../styles/dashboard/dashboard.scss";

export default function UserInfo() {
  return (
    <>
      <div className="row mt-2">
        <div className="box-left">
          <Card
            title={"Jovid Masharipov"}
            text={"19 лет (08.12.2002) "}
            cardBody={
              <div className="user-info">
                <div className="user-info__body">
                  <div className="user__adress">
                    <p className="txt_">Dushanbe, Tajikistan</p>
                    <p className="txt_">
                      Формат работы: Москва, Санкт-Петербург
                    </p>
                    <div className="user__contact">
                      <p className="u-mail txt_link">jovid1242@gmail.com</p>
                      <p className="u-phone txt_link">+992-92-628-1305</p>
                      <p className="u-messenger txt_link">
                        telegram: jovid1208
                      </p>
                      <p className="u-git txt_link">Github</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="box-right">
          <Card
            cardBody={
              <div>
                <h4>card</h4>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}

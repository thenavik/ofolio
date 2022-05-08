import React from "react";
import { Link } from "react-router-dom";
import "../../styles/core/xfooter.scss";

export default function XFooter() {
  return (
    <>
      <footer>
        <span>
          Made with ♥ by{" "}
          <a href="https://repost.ofolio.ru/" target={"blank"}>
            Repost Space
          </a>
        </span>
      </footer>
    </>
  );
}

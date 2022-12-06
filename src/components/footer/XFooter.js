import React from "react";
import { Link } from "react-router-dom";
import "../../styles/core/xfooter.scss";

export default function XFooter() {
  return (
    <>
      <footer>
        <span>
          Made with ♥ by{" "}
          <a href="http://repost.ofolio.ru/" target="_blank">
            Repost Space 
          </a>
        </span>
      </footer>
    </>
  );
}

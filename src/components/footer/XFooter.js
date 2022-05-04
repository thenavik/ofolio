import React from "react";
import { Link } from "react-router-dom";
import "../../styles/core/xfooter.scss";

export default function XFooter() {
  return (
    <>
      <footer>
        <span>
          Created by <Link to="#">Repost Space</Link>
        </span>
      </footer>
    </>
  );
}

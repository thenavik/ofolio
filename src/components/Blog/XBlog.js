import React from "react";
import XMainHeadline from "../../core/XMainHeadline";
import "../../styles/blog/xblog.scss";

export default function XBlog() {
  return (
    <>
      <div className="blog-section">
        <div className="container_ofolio">
          <XMainHeadline title={"Latest Posts"} />
          <div className="posts-row">
            <div className="col_4">
              <div className="post-item">
                <div className="post-img"></div>
                <div className="post-details">
                  <h4 className="post-title">
                    5 Best App Development Tool for Your Project
                  </h4>
                  <span className="post-time">09 February, 2020</span>
                </div>
              </div>
            </div>
            <div className="col_4">
              <div className="post-item">
                <div className="post-img"></div>
                <div className="post-details">
                  <h4 className="post-title">
                    5 Best App Development Tool for Your Project
                  </h4>
                  <span className="post-time">09 February, 2020</span>
                </div>
              </div>
            </div>
            <div className="col_4">
              <div className="post-item">
                <div className="post-img"></div>
                <div className="post-details">
                  <h4 className="post-title">
                    5 Best App Development Tool for Your Project
                  </h4>
                  <span className="post-time">09 February, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

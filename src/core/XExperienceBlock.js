import React from "react";
import "../styles/core/block.scss";
import { MdOutlineSchool, MdWorkOutline } from "react-icons/md";

export default function XExperienceBlock() {
  return (
    <>
      <div className="col_6">
        <div className="block-inner">
          <div className="block-body">
            <div className="block-icons">
              <MdOutlineSchool />
            </div>
            <div className="block-content">
              <span className="time">2019 - Present</span>
              <h3 className="block-title">Academic Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
          <div className="block-body">
            <div className="block-icons">
              <MdOutlineSchool />
            </div>
            <div className="block-content">
              <span className="time">2017 - 2013</span>
              <h3 className="block-title">Bachelor's Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
          <div className="block-body">
            <div className="block-icons">
              <MdOutlineSchool />
            </div>
            <div className="block-content">
              <span className="time">2013 - 2009</span>
              <h3 className="block-title">Honours Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col_6">
        <div className="block-inner">
          <div className="block-body">
            <div className="block-icons">
              <MdWorkOutline />
            </div>
            <div className="block-content">
              <span className="time">2019 - Present</span>
              <h3 className="block-title">Academic Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
          <div className="block-body">
            <div className="block-icons">
              <MdWorkOutline />
            </div>
            <div className="block-content">
              <span className="time">2017 - 2013</span>
              <h3 className="block-title">Bachelor's Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
          <div className="block-body">
            <div className="block-icons">
              <MdWorkOutline />
            </div>
            <div className="block-content">
              <span className="time">2013 - 2009</span>
              <h3 className="block-title">Honours Degree</h3>
              <p className="block-text">
                Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec
                admodum perfecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

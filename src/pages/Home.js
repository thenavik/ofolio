import React, { useEffect } from "react";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XFooter from "../components/footer/XFooter";
import XHeader from "../components/Header/XHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner/Banner";

export default function Home({ page }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <XHeader />
      <Banner page={page} />
      <canvas> </canvas>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-anchor-placement="top-bottom"
      >
        <XAbout page={page} />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <XSkills page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <XExperience page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <XWork page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <XFooter page={page} />
      </div>
    </>
  );
}

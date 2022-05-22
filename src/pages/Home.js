import React, { useEffect } from "react";
import XAbout from "../components/About/XAbout";
import XSkills from "../components/Skills/XSkills";
import XExperience from "../components/Experience/XExperience";
import XWork from "../components/Works/XWorks";
import XFooter from "../components/footer/XFooter";
import XHeader from "../components/Header/XHeader";
import AnimatedCursor from "react-animated-cursor";
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
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <XHeader />
      <Banner page={page} />
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XAbout page={page} />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XSkills page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XExperience page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XWork page={page} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-anchor-placement="center-bottom"
      >
        <XFooter page={page} />
      </div>
    </>
  );
}

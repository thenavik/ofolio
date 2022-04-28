import React from "react";
import { Routes, Route } from "react-router-dom";

// import page
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import XAbout from "../components/About/XAbout";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<XAbout />} />
      </Routes>
    </>
  );
}

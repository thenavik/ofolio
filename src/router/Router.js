import React from "react";
import { Routes, Route } from "react-router-dom";

// import page
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import XAbout from "../components/About/XAbout";
import XHeader from "../components/Header/XHeader";
import Dashboard from "../pages/dashboard/Dashboard";

export default function Router() {
  return (
    <>
      <XHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<XAbout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

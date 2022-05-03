import React from "react";
import { Routes, Route } from "react-router-dom";
// import page
import Home from "../pages/Home";
import XHeader from "../components/Header/XHeader";

export default function Router() {
  return (
    <>
      <XHeader />
      <Routes>
        <Route path="/jovid" element={<Home page="0" />} />
        <Route path="/navruz" element={<Home page="1" />} />
      </Routes>
    </>
  );
}

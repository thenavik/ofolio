import React from "react";
import { Routes, Route } from "react-router-dom";
// import page
import Home from "../pages/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/jovid" element={<Home page="0" />} />
        <Route path="/navruz" element={<Home page="1" />} />
      </Routes>
    </>
  );
}

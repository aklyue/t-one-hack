import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CameraPage from "./pages/CameraPage";
import Header from "./components/UI/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate" element={<CameraPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

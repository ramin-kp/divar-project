import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Auth from "../pages/auth";

function Router() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;

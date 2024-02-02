import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Auth from "../pages/auth";
import { getProfile } from "../services/user";
import { useQuery } from "@tanstack/react-query";
import Dashboard from "../pages/Dashboard";
import Admin from "../pages/Admin";
import NotFound from "../pages/404";
import Loader from "./../components/Loader";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);
  if (isLoading) return <Loader />;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <Auth />}
      />
      <Route
        path="/dashboard"
        element={data ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;

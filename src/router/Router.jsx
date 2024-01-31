import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Auth from "../pages/auth";
import getProfile from "../services/user";
import { useQuery } from "@tanstack/react-query";

function Router() {
  const { data, isLoading } = useQuery(["profile"], getProfile);
  console.log(data);
  if (isLoading) return <h1>loading ...</h1>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;

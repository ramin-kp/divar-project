import React from "react";
import api from "./configs/api";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

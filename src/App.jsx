import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/thme";

import Router from "./router/Router";
import defaultOptions from "./configs/reactQuery";
import Layout from "./components/layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const query = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={query}>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout>
              <Router />
              <ToastContainer autoClose={2000} />
            </Layout>
          </BrowserRouter>
          <ReactQueryDevtools />
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}

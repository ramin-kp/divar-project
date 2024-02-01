import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ marginBottom: "100px" }}>
      <AppBar color="inherit" sx={{ padding: "0 150px", zIndex: 100 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="/" style={{ height: "48px" }}>
              <img
                src="/images/divar.svg"
                alt="logo-img"
                style={{ width: "48px", height: "100%", margin: "auto" }}
              />
            </Link>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: "10px 20px" }}
            />
            <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/images/location.svg"
                alt="location-img"
                style={{ width: "25px", height: "25px" }}
              />
              <Typography variant="h6" px={0.5} fontSize={15} fontWeight="100">
                تهران
              </Typography>
            </Box>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Link
              to="/auth"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "5px",
              }}
            >
              <img
                src="/images/profile.svg"
                alt="location-img"
                style={{ width: "15px", height: "15px" }}
              />
              <Typography variant="h6" px={0.5} fontSize={15} fontWeight="100">
                دیوار من
              </Typography>
            </Link>
            <Link to="/dashboard">
              <Typography
                variant="h6"
                px={1.5}
                py={0.5}
                bgcolor="#b91c1c"
                fontSize={15}
                fontWeight="100"
                color="white"
                borderRadius={1}
                sx={{ "&:hover": { background: "#991b1b" } }}
              >
                ثبت آگهی
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;

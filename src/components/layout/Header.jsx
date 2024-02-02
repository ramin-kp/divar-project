import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getProfile } from "./../../services/user";

function Header() {
  const { data, isLoading } = useQuery(["profile"], getProfile);
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
            {data && data.data.role === "ADMIN" && (
              <Link
                to="/admin"
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  backgroundColor: "#e5e7eb",
                  color: "#b91c1c",
                  borderRadius: "4px",
                  fontWeight: "600",
                }}
              >
                پنل ادمین
              </Link>
            )}
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

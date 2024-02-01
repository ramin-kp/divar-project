import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={2}
        my={3}
        bgcolor="#991b1b"
        color="white"
        borderRadius={1}
        fontWeight="700"
      >
        ❤ develope by ramin._kp
      </Box>
    </footer>
  );
}

export default Footer;

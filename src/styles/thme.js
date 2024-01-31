import { createTheme } from "@mui/material";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    fontFamily: `"vazir","Roboto", "Helvetica", "Arial", "sans-serif"`,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 400,
    fontWeightHeavy: 600,
  },
  direction: "rtl",
  palette: {
    mainColor: createColor("#991b1b"),
  },
});

export default theme;

import { ThemeProvider, createTheme } from "@mui/material/styles";

export const color = {
  primary: "#3897d3",
  secondary: "white",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3897d3", // Replace with your desired primary color
    },
  },
});

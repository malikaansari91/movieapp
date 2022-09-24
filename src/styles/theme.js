import { responsiveFontSizes, createTheme } from "@mui/material/styles";

export const getAppTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode,
      background: {
        default: "#273244",
        paper: "#1F2A3C",
      },
    },
    typography: {
      // Tell MUI what's the font-size on the html element is.
      fontSize: 12,
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};

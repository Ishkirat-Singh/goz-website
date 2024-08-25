import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#E96A55",
    },
    text: {
      primary: "#042C48",
    },
    background: {
      default: "#FCFCFC",
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        color: "inherit",
        underline: "none",
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.grot": {
            fontFamily: "Darker Grotesque, sans-serif",
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontFamily: "Darker Grotesque, sans-serif",
      lineHeight: 0.85,
      "@media (max-width: 600px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontWeight: 700,
      "@media (max-width: 600px)": {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      lineHeight: 2,
    },
    button: {
      textTransform: "inherit",
      fontWeight: 700,
    },
    fontFamily: "Raleway, sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;

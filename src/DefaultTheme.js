import { grey } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4223fb",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#96d5d2",
      contrastText: "#333"
    },
    tertiary: {
      main: "#4223fb",
      contrastText: "#333"
    },
    bodyText: grey[100]
  },
  typography: {
    useNextVariants: true,
    fontFamily: `'Nunito Sans', sans-serif`,
    fontWeight: 300
  },
  overrides: {
    MuiTypography: {
      root: {
        fontWeight: 300
      },
      h3: {
        fontWeight: 300
      }
    }
  }
});

export default theme;

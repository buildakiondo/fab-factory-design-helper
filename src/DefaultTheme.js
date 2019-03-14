import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#557490',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d89194',
      contrastText: '#ffffff',
    },
    tertiary: {
      main: '#21a9b0',
      contrastText: '#ffffff',
    },
    grey: grey,
    bodyText: grey[100],
  },
  typography: {
    useNextVariants: true,
    fontFamily: `'Nunito Sans', sans-serif`,
    fontWeight: 300,
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiButtin: {
      elevation: 0,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontWeight: 300,
      },
      h3: {
        fontWeight: 300,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        letterSpacing: '0.05em',
      },
    },
  },
});

export default theme;

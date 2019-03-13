import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4223fb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#96d5d2',
      contrastText: '#333',
    },
    tertiary: {
      main: '#4223fb',
      contrastText: '#333',
    },
    bodyText: grey[100],
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Montserrat", sans-serif',
  },
  overrides: {},
});

export default theme;

import { grey } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
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
  grey,
  background: {
    main: '#ecf0f1',
  },
  bodyText: {
    main: '#333',
    light: grey[600],
  },
};

const helpers = createMuiTheme();
const {
  // breakpoints,
  typography: { pxToRem },
} = helpers;

const theme = createMuiTheme({
  palette: colors,
  typography: {
    useNextVariants: true,
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 300,
  },
  props: {
    MuiAppBar: {
      elevation: 0,
    },
    MuiButton: {
      elevation: 0,
    },
    MuiIconButton: {
      color: 'inherit',
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
        color: colors.tertiary.main,
      },
      sizeLarge: {
        fontSize: pxToRem(18),
      },
      outlined: {
        borderRadius: 5,
        padding: '1.5em 2.75em',
        border: `2px solid ${colors.background.main}`,
      },
      outlinedPrimary: {
        color: colors.tertiary.main,
      },
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          color: colors.bodyText.main,
          fontWeight: 700,
          '&:focus': {
            color: colors.bodyText.main,
            backgroundColor: colors.background.main,
            fontWeight: 700,
          },
        },
      },
    },
  },
});

export default theme;

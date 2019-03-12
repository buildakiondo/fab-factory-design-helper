import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import theme from "./DefaultTheme";
import Container from "./pages/index";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container />
      </MuiThemeProvider>
    );
  }
}

export default App;

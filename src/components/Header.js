import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h5">Fab Factory</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

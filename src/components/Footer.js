import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Header() {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography variant="subtitle1">Fab Factory &copy; 2019</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

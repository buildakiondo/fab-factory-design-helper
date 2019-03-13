import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

function Container() {
  return (
    <Paper elevation={0}>
      <Grid container direction="column" spacing={24}>
        <Grid item>
          <Typography variant="h3" component="h1" align="center">
            Fab Factory Demo
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Container;

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './Logo';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
});

function Header({ classes }) {
  return (
    <header className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={11} md={4} lg={3}>
          <Logo />
        </Grid>
      </Grid>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);

import { Fade, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
});

function Question({ children, classes }) {
  const [isComplete] = React.useState(false);
  return (
    <Fade in={!isComplete}>
      <div className={classes.root}>
        <Typography variant="h6">{children}</Typography>
      </div>
    </Fade>
  );
}

Question.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
};

export default withStyles(styles)(Question);

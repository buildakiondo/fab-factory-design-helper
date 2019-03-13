import { ButtonBase, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = theme => ({
  root: {
    border: `2px solid ${theme.palette.grey[200]}`,
    borderRadius: 10,
    position: 'relative',
    display: 'block',
    width: '100%',
    maxWidth: 300,
  },
  img: {
    display: 'block',
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
    '& > *': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
  text: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.primary.main,
  },
});

function ResponseButton({ children, classes, ...props }) {
  return (
    <ButtonBase className={classes.root} {...props}>
      <div className={classes.img}>image/svg</div>
      <Typography className={classes.text} variant="h6">
        {children}
      </Typography>
    </ButtonBase>
  );
}

export default withStyles(styles)(ResponseButton);

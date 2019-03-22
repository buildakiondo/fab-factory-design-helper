import { ButtonBase, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    border: `2px solid ${theme.palette.background.main}`,
    borderRadius: 10,
    position: 'relative',
    display: 'block',
    width: 200,
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0px 6px 20px -5px rgba(0,0,0,0.15)',
    transition: theme.transitions.create(
      ['border-color', 'background-color', 'transform'],
      {
        duration: theme.transitions.duration.complex,
      },
    ),
    '&:hover': {
      backgroundColor: theme.palette.background.main,
      transform: 'translateY(-3px)',
    },
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
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(16),
  },
  selected: {
    backgroundColor: theme.palette.background.main,
    borderColor: theme.palette.tertiary.main,
  },
});

function ResponseButton({ children, classes, selected, image, ...props }) {
  return (
    <ButtonBase
      className={classNames(classes.root, selected && classes.selected)}
      {...props}
    >
      {image && (
        <div className={classes.img}>
          <span>image/svg</span>
        </div>
      )}
      <Typography className={classes.text} variant="body1">
        {children}
      </Typography>
    </ButtonBase>
  );
}

ResponseButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  selected: PropTypes.bool,
  image: PropTypes.string,
};
ResponseButton.defaultProps = { children: {}, selected: false, image: '' };

export default withStyles(styles)(ResponseButton);

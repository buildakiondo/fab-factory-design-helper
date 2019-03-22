import { ButtonBase, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {} from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.background.main,
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    paddingTop: '100%',
    borderRadius: 6,
    transition: theme.transitions.create(
      ['border-color', 'opacity', 'transform'],
      {
        duration: theme.transitions.duration.complex,
      },
    ),
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '4px solid transparent',
      borderRadius: 6,
      zIndex: 10,
    },
    '&:hover': {
      transform: 'scale(1.15)',
      zIndex: 10,
    },
  },
  selected: {
    '&::before': {
      borderColor: theme.palette.tertiary.main,
    },
  },
  checkIcon: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    color: theme.palette.tertiary.contrastText,
    width: '100%',
    height: 'calc(15% + 8px)',
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  icon: {
    height: '100%',
    width: 'auto',
    margin: '0 auto',
  },
});

function ResponseImage({ classes, selected, image, ...props }) {
  return (
    <ButtonBase
      className={classNames(classes.root, selected && classes.selected)}
      {...props}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Grow
        in={selected}
        style={{ transformOrigin: 'bottom' }}
        {...(selected ? { timeout: 300 } : {})}
      >
        <div className={classes.checkIcon}>
          <CheckIcon className={classes.icon} />
        </div>
      </Grow>
    </ButtonBase>
  );
}
ResponseImage.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};
ResponseImage.defaultProps = { selected: false };

export default withStyles(styles)(ResponseImage);

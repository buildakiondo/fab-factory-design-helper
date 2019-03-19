import { ButtonBase, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {} from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import image from '../assets/room1.jpg';

const styles = theme => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    paddingTop: '100%',
    borderRadius: 6,
    transition: 'opacity 0.3s ease-out',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: '2px solid transparent',
      borderRadius: 6,
      zIndex: 10,
    },
    '&:hover': {
      opacity: 0.8,
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
    color: theme.palette.tertiary.main,
    width: '100%',
    height: 'calc(15% + 8px)',
    backgroundColor: theme.palette.tertiary.contrastText,
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  icon: {
    height: '100%',
    margin: '0 auto',
  },
});

function ResponseImage({ children, classes, selected, ...props }) {
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
  children: PropTypes.node,
  selected: PropTypes.bool,
};
ResponseImage.defaultProps = { children: {}, selected: false };

export default withStyles(styles)(ResponseImage);

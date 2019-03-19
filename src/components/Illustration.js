import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import image from '../assets/sofa.png';

const styles = {
  root: {
    backgroundColor: '#205d8a',
    color: '#fff',
    minHeight: '20vh',
    width: '100%',
    maxWidth: 400,
    borderRadius: 8,
    margin: '0 auto 2rem',
    textAlign: 'center',
    '& img': {
      maxWidth: '100%',
    },
  },
};

function Illustration({ classes }) {
  return (
    <div className={classes.root}>
      <img src={image} alt="" />
    </div>
  );
}

Illustration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Illustration);

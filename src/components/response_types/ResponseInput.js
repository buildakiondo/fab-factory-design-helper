import { InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    width: '100%',
    border: `2px solid ${theme.palette.background.main}`,
    backgroundColor: '#fff',
    padding: '1rem',
    fontSize: 20,
    borderRadius: 10,
    height: 'auto',
    transition: 'border-color 0.2s ease-out',
  },
  focused: {
    borderColor: theme.palette.tertiary.main,
  },
});

function ResponseInput({ classes, ...props }) {
  return (
    <InputBase
      className={classes.root}
      classes={{
        focused: classes.focused,
      }}
      inputProps={{
        spellCheck: false,
      }}
      multiline
      rows={2}
      rowsMax={2}
      placeholder="Type here..."
      {...props}
    />
  );
}

ResponseInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponseInput);

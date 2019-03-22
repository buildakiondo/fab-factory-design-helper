import { Checkbox, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    display: 'flex',
  },
  label: {
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  formControl: {
    display: 'flex',
  },
});

function ResponseCheckbox({ classes, selected, label, ...props }) {
  return (
    <FormControlLabel
      className={classes.root}
      classes={{ label: classes.label }}
      control={
        <Checkbox
          checked={selected}
          {...props}
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
      }
      label={label}
    />
  );
}

ResponseCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};
ResponseCheckbox.defaultProps = { children: {}, selected: false, image: '' };

export default withStyles(styles)(ResponseCheckbox);

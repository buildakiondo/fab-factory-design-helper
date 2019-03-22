import { MenuItem, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    padding: '1rem',
    border: `2px solid ${theme.palette.background.main}`,
    borderRadius: 10,
    fontSize: 20,
    lineHeight: 1.2,
    transition: 'border-color 0.2s ease-out',
    '&:focus': {
      borderRadius: 10,
      borderColor: theme.palette.tertiary.main,
    },
  },
  icon: {
    right: theme.spacing.unit * 2,
    color: theme.palette.primary.main,
  },
  menu: {
    borderRadius: 10,
    border: `2px solid ${theme.palette.tertiary.main}`,
    boxShadow: '0 4px 18px rgba(0,0,0,0.2)',
    margin: '0 2px',
  },
});

function ResponseSelect({ classes, children, handleChange }) {
  return (
    <Select
      value=""
      //onChange={handleChange}
      displayEmpty
      name="select"
      IconComponent={ArrowDownIcon}
      fullWidth
      disableUnderline
      inputProps={{
        classes: {
          select: classes.root,
          icon: classes.icon,
        },
      }}
      MenuProps={{
        classes: {
          paper: classes.menu,
        },
      }}
    >
      <MenuItem value="">Select an option</MenuItem>
      {children}
    </Select>
  );
}

ResponseSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponseSelect);

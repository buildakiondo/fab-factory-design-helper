import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
function Content({ children, classes, ...props }) {
  return (
    <div className={classes.root} {...props}>
      {children}
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};
Content.defaultProps = { children: {} };

export default withStyles(styles)(Content);

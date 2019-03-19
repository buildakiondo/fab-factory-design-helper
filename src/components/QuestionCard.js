import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  root: {
    width: '100%',
  },
  question: {
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: 20,
      width: 20,
      boxShadow: '6px 6px 14px -2px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      transform: 'rotate(45deg)',
      top: 'calc(100% - 14px)',
      left: '50%',
      marginLeft: '-8px',
    },
  },
  questionType: {
    color: theme.palette.primary.main,
    overflow: 'hidden',
    margin: '0 auto',
    borderRadius: 20,
    display: 'inline-block',
    boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    '& strong': {
      display: 'block',
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
      backgroundColor: '#fff',
      width: '100%',
      position: 'relative',
      zIndex: 10,
    },
  },
  cardContent: {
    padding: theme.spacing.unit * 4,
  },
});

function QuestionCard({ children, classes, question }) {
  return (
    <div className={classes.root}>
      <div className={classes.question}>
        <Typography
          className={classes.questionType}
          variant="h5"
          align="center"
          color="inherit"
        >
          <strong>{question}</strong>
        </Typography>
      </div>
      <div className={classes.cardContent}>{children}</div>
    </div>
  );
}

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  question: PropTypes.string,
};

QuestionCard.defaultProps = { question: '' };

export default withStyles(styles)(QuestionCard);

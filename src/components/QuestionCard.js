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
      boxShadow: '6px 6px 14px -2px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      transform: 'rotate(45deg)',
      top: 'calc(100% - 14px)',
      left: '50%',
      marginLeft: '-8px',
    },
  },
  questionText: {
    color: '#000',
    overflow: 'hidden',
    margin: '0 auto',
    borderRadius: 20,
    display: 'inline-block',
    boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontWeight: 300,
    '& span': {
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

function QuestionCard({ children, classes, question, ...props }) {
  return (
    <div className={classes.root} {...props}>
      <div className={classes.question}>
        <Typography
          className={classes.questionText}
          variant="h5"
          align="center"
          color="inherit"
        >
          <span>{question}</span>
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

import { Button, Fade, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import React from 'react';
import Question from './Question';
import ResponseButton from './ResponseButton';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
});

const testQuestion = {
  type: 'question',
  subtype: 'radio',
  data: {
    question: 'What are you looking for now?',
    options: [
      {
        buttonText: 'a chair',
      },
      {
        buttonText: 'a sofa',
      },
      {
        buttonText: 'a bed',
      },
    ],
  },
};

function QuestionContainer({ classes }) {
  return (
    <div className={classes.root}>
      <Fade in={true}>
        <div>
          <Question>{testQuestion.data.question}</Question>
          <Grid container spacing={24} justify="flex-start">
            {testQuestion.data.options.map(option => (
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <ResponseButton>{option.buttonText}</ResponseButton>
              </Grid>
            ))}
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Button size="large" variant="outlined">
                Done
              </Button>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
}

QuestionContainer.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(QuestionContainer);

import { Button, Fade, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import React from 'react';
import Tree from '../decision_tree/tree';
import Question from './Question';
import ResponseButton from './ResponseButton';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
});

function QuestionContainer({ classes }) {
  const [currentQuestion, setValue] = React.useState(
    Tree.getCurrentState('question1'),
  );

  if (currentQuestion.type === 'question') {
    return (
      <div className={classes.root}>
        <Fade in={true}>
          <div>
            <Question>{currentQuestion.data.question}</Question>
            <Grid container spacing={24} justify="center">
              {currentQuestion.data.options.map(option => (
                <Grid key={option.text} item xs={6} sm={4} md={3} lg={2}>
                  <Fade in={true}>
                    <ResponseButton
                      onClick={() =>
                        setValue(
                          Tree.changeState(currentQuestion.name, option.text),
                        )
                      }
                    >
                      {option.text}
                    </ResponseButton>
                  </Fade>
                </Grid>
              ))}
            </Grid>
            <Grid container justify="center">
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
  } else {
    return <div>This is not a question. This is a result</div>;
  }
}

QuestionContainer.propTypes = {
  classes: propTypes.object.isRequired,
};

export default withStyles(styles)(QuestionContainer);

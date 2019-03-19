import { Button, Grid, Grow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from '../decision_tree/tree';
import QuestionCard from './QuestionCard';
import ResponseButton from './ResponseButton';
import ResponseImage from './ResponseImage';
import ResponseInput from './ResponseInput';
import ResponseSelect from './ResponseSelect';
import ResponseSlider from './ResponseSlider';

const styles = {
  root: {
    height: '100%',
    width: '100%',
  },
  cardActions: {
    paddingTop: '2rem',
  },
};

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: Tree.getCurrentState('question1'),
      selectedOption: '',
    };
  }

  nextQuestion() {
    const { state } = this.state;
    if (state.selectedOption) {
      this.setState({
        currentQuestion: Tree.changeState(
          state.currentQuestion.name,
          state.selectedOption,
        ),
        selectedOption: '',
      });
    }
  }

  render() {
    const { currentQuestion, selectedOption } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {currentQuestion && (
          <React.Fragment>
            <QuestionCard question={currentQuestion.data.question}>
              <Grid container spacing={24} justify="center">
                {currentQuestion.data.options.map(option => (
                  <Grid key={option.text} item>
                    <ResponseButton
                      selected={selectedOption === option.text}
                      onClick={() =>
                        this.setState({ selectedOption: option.text })
                      }
                    >
                      {option.text}
                    </ResponseButton>
                  </Grid>
                ))}
              </Grid>
              <Grid container justify="center" className={classes.cardActions}>
                <Grid item>
                  <Grow in={!!selectedOption}>
                    <Button
                      size="large"
                      variant="outlined"
                      onClick={this.nextQuestion}
                      disabled={!selectedOption}
                    >
                      Next
                    </Button>
                  </Grow>
                </Grid>
              </Grid>
            </QuestionCard>
            <QuestionCard question="Which image do you like?">
              <Grid container spacing={24} alignItems="center" justify="center">
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseImage selected />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseImage selected />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseImage />
                </Grid>
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseImage />
                </Grid>
              </Grid>
            </QuestionCard>
            <QuestionCard question="Which one would you like to select?">
              <Grid container spacing={24} alignItems="center" justify="center">
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseSelect />
                </Grid>
              </Grid>
            </QuestionCard>
            <QuestionCard question="How much do you like this?">
              <Grid container spacing={24} alignItems="center" justify="center">
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseSlider />
                  <ResponseSlider
                    lowerLimitLabel="Not Cool"
                    upperLimitLabel="Cool"
                  />
                  <ResponseSlider lowerLimitLabel="0%" upperLimitLabel="100%" />
                </Grid>
              </Grid>
            </QuestionCard>
            <QuestionCard question="What is your name?">
              <Grid container spacing={24} alignItems="center" justify="center">
                <Grid item xs={6} md={4} lg={3}>
                  <ResponseInput />
                </Grid>
              </Grid>
            </QuestionCard>
          </React.Fragment>
        )}
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionContainer);

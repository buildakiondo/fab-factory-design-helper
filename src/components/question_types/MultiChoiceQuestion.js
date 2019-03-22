import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import QuestionCard from '../QuestionCard';
import ResponseButton from '../response_types/ResponseButton';

const styles = {
  cardActions: {
    paddingTop: '2rem',
  },
};

function MultiChoiceQuestion({ questionObj, handleNext, classes }) {
  const [state, setState] = React.useState({
    selectedOption: '',
  });
  const handleClick = option => {
    setState({
      selectedOption: option,
    });
  };
  return (
    <QuestionCard question={questionObj.data.question}>
      <Grid container spacing={24} justify="center">
        {questionObj.data.options.map(option => (
          <Grid key={option.text} item>
            <ResponseButton
              selected={state.selectedOption.text === option.text}
              onClick={() => handleClick(option)}
            >
              {option.text}
            </ResponseButton>
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center" className={classes.cardActions}>
        <Grid item>
          <Button
            size="large"
            variant="outlined"
            onClick={() =>
              handleNext(questionObj.name, state.selectedOption.nextState)
            }
            disabled={!state.selectedOption}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </QuestionCard>
  );
}

export default withStyles(styles)(MultiChoiceQuestion);

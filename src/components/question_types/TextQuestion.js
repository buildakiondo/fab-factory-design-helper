import { Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import QuestionCard from '../QuestionCard';
import ResponseInput from '../response_types/ResponseInput';

const styles = {
  cardActions: {
    paddingTop: '2rem',
  },
};

function TextQuestion({ questionObj, handleNext, classes }) {
  const [value, setValue] = React.useState('');

  return (
    <QuestionCard question={questionObj.data.question}>
      <Grid container justify="center">
        <Grid item xs={12} md={5} lg={3}>
          <ResponseInput
            label="label"
            value={value}
            autoFocus
            onChange={e => setValue(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.cardActions}>
        <Grid item>
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              handleNext(questionObj.name, questionObj.data.nextState, value);
              setValue('');
            }}
            disabled={!value}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </QuestionCard>
  );
}

export default withStyles(styles)(TextQuestion);

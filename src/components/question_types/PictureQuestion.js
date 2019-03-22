import { Button, Grid } from '@material-ui/core';
import React from 'react';
import QuestionCard from '../QuestionCard';
import ResponseImage from '../response_types/ResponseImage';

function PictureQuestion({ questionObj, handleNext }) {
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
      <Grid
        container
        spacing={24}
        alignItems="center"
        justify="center"
        style={{ maxWidth: 1192, margin: '0 auto' }}
      >
        {questionObj.data.options.map(option => (
          <Grid item xs={6} lg={4}>
            <ResponseImage
              image={option.image}
              onClick={() => handleClick(option)}
              selected={state.selectedOption.text === option.text}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            disabled={!state.selectedOption && true}
            size="large"
            onClick={() =>
              handleNext(questionObj.name, state.selectedOption.nextState)
            }
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </QuestionCard>
  );
}

export default PictureQuestion;

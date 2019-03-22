import { Button, Grid, Grow, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import React from 'react';
import QuestionCard from '../QuestionCard';
import ResponseCheckbox from '../response_types/ResponseCheckbox';
import ResponseSlider from '../response_types/ResponseSlider';

function ImportanceQuestion({ questionObj, handleNext }) {
  const [state, setState] = React.useState({
    currentSlide: 0,
    options: questionObj.data.options,
    data: [],
  });

  const handleSelect = i => {
    let data = state.options;
    if (!state.options[i].selected) {
      data[i].selected = true;
      data[i].value = 50;
    } else {
      data[i].selected = !state.options[i].selected;
    }

    function filterSelected(obj) {
      if (obj.selected) {
        return true;
      }
    }

    setState({
      ...state,
      options: data,
      data: data.filter(filterSelected),
    });
    console.log(data.filter(filterSelected));
  };

  const handleSlider = (event, value, i) => {
    let data = state.data;
    data[i].value = value;
    console.log(data);
    setState({ ...state, data: data });
  };

  const nextSlide = () => {
    setState({ ...state, currentSlide: 1 });
  };
  const prevSlide = () => {
    setState({ ...state, currentSlide: 0 });
  };

  if (state.currentSlide === 0) {
    return (
      <QuestionCard
        key={`${questionObj.data.question}0`}
        question={questionObj.data.question[0]}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={4}>
            <Grid container>
              {questionObj.data.options.map((option, i) => (
                <Grid
                  key={option.text}
                  item
                  xs={6}
                  md={questionObj.data.options.length > 6 ? 6 : 'auto'}
                >
                  <ResponseCheckbox
                    onClick={() => handleSelect(i)}
                    label={option.text}
                    value={option.text}
                    selected={state.options[i].selected}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Grow in={state.data.length !== 0}>
                  <IconButton
                    onClick={nextSlide}
                    disabled={state.data.length === 0}
                    color="secondary"
                    size="large"
                  >
                    <CheckIcon fontSize="large" />
                  </IconButton>
                </Grow>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </QuestionCard>
    );
  } else {
    return (
      <QuestionCard
        key={`${questionObj.data.question}1`}
        question={questionObj.data.question[1]}
      >
        <Grid container justify="center">
          <Grid item xs={12} md={6} lg={5}>
            <Grid container spacing={24} justify="space-evenly">
              {state.data.map((option, i) => {
                if (option.selected) {
                  return (
                    <Grid xs={12} md={state.data.length > 5 ? 5 : 7}>
                      <ResponseSlider
                        label={option.text}
                        lowerLimitLabel="Not important"
                        upperLimitLabel="Very important"
                        value={state.data[i].value}
                        handleChange={(e, v) => handleSlider(e, v, i)}
                      />
                    </Grid>
                  );
                } else {
                  return '';
                }
              })}
            </Grid>
            <Grid container justify="space-between">
              <Grid item>
                <IconButton onClick={prevSlide}>
                  <PrevIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    handleNext(
                      questionObj.name,
                      questionObj.data.nextState,
                      state.data,
                    );
                    setState({
                      currentSlide: 0,
                      options: questionObj.data.options,
                      data: [],
                    });
                  }}
                  disabled={state.data.length === 0}
                  variant="outlined"
                  size="large"
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </QuestionCard>
    );
  }
}

export default ImportanceQuestion;

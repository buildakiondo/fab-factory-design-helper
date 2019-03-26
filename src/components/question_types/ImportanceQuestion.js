import { Button, Grid, Grow, IconButton } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import React from 'react';
import QuestionCard from '../QuestionCard';
import ResponseCheckbox from '../response_types/ResponseCheckbox';
import ResponseSlider from '../response_types/ResponseSlider';


class ImportanceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      options: [],
      data: [],
    }
  }


  componentDidMount() {
    this.setState({
      options: this.props.questionObj.data.options
    })
  }


  handleSelect = i => {
    let data = this.state.options;
    if (!this.state.options[i].selected) {
      data[i].selected = true;
      data[i].value = 50;
    } else {
      data[i].selected = !this.state.options[i].selected;
    }

    function filterSelected(obj) {
      if (obj.selected) {
        return true;
      }
    }

    this.setState({
      options: data,
      data: data.filter(filterSelected),
    });
  };




  handleSlider = (event, value, i) => {
    let data = this.state.data;
    data[i].value = value;
    this.setState({ data: data });
  };

  resetState = () => {
    this.setState({
      currentSlide: 0,
      options: [],
      data: []
    });
  }
  nextSlide = () => {
    this.setState({ currentSlide: 1 });
  };
  prevSlide = () => {
    this.setState({ currentSlide: 0 });
  };



  render() {
    const { questionObj, handleNext } = this.props

    if (this.state.currentSlide === 0) {
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
                      onClick={() => this.handleSelect(i)}
                      label={option.text}
                      value={option.text}
                      selected={this.state.options[i] && this.state.options[i].selected}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Grow in={this.state.data.length !== 0}>
                    <IconButton
                      onClick={this.nextSlide}
                      disabled={this.state.data.length === 0}
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
                {this.state.data.map((option, i) => {
                  if (option.selected) {
                    return (
                      <Grid
                        key={option.text}
                        xs={12}
                        md={this.state.data.length > 5 ? 5 : 7}
                        item
                      >
                        <ResponseSlider
                          label={option.text}
                          lowerLimitLabel="Not important"
                          upperLimitLabel="Very important"
                          value={this.state.data[i].value}
                          handleChange={(e, v) => this.handleSlider(e, v, i)}
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
                  <IconButton onClick={this.prevSlide}>
                    <PrevIcon fontSize="large" />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => {
                      this.resetState()
                      handleNext(
                        questionObj.name,
                        questionObj.data.nextState,
                        this.state.data,
                      );
                    }}
                    disabled={this.state.data.length === 0}
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
}

export default ImportanceQuestion;

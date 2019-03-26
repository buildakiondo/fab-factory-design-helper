import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Tree from '../decision_tree/tree';
import QuestionNav from './QuestionNav';
import ImportanceQuestion from './question_types/ImportanceQuestion';
import MultiChoiceQuestion from './question_types/MultiChoiceQuestion';
import PictureQuestion from './question_types/PictureQuestion';
import TextQuestion from './question_types/TextQuestion';

const styles = theme => ({
  root: {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    position: 'relative',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 12,
  },
  toolbar: {
    position: 'absolute',
    top: 0,
    left: '50%',
    display: 'block',
    transform: 'translateX(-50%)',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    minHeight: 0,
    borderRadius: 8,
    padding: theme.spacing.unit,
    zIndex: 100,
  },
});

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answeredQuestions: [],
      currentQuestion: Tree.getCurrentState('base-need'),
      selectedOption: '',
      data: '',
    };
  }

  handleNext = (currentState, nextState, data) => {
    this.setState({ currentQuestion: { subtype: "load" } })
    setTimeout(() => {
      this.setState({
        currentQuestion: Tree.changeState(currentState, nextState, data),
        answeredQuestions: [...this.state.answeredQuestions, currentState],
      });
    }, 300);
  };

  restart = () => {
    this.setState({ currentQuestion: { subtype: "load" } })
    setTimeout(() => {
      this.setState({
        currentQuestion: Tree.getCurrentState('base-need'),
        answeredQuestions: [],
      });
    }, 300);
  };

  previous = () => {
    console.log(
      this.state.answeredQuestions.splice(
        this.state.answeredQuestions.length - 1,
        1,
      ),
    );
    // this.setState({
    //   currentQuestion: Tree.getCurrentState(
    //     this.state.answeredQuestions[this.state.answeredQuestions.length - 1],
    //   ),
    //   answeredQuestions: this.state.answeredQuestions.splice(
    //     this.state.answeredQuestions.length - 1,
    //     1,
    //   ),
    // });
  };

  renderSwitch(q) {
    switch (q.subtype) {
      case 'multiple-choice':
        return (
          <MultiChoiceQuestion questionObj={q} handleNext={this.handleNext} />
        );

      case 'multiple-choice-importance':
        return (
          <ImportanceQuestion questionObj={q} handleNext={this.handleNext} />
        );

      case 'multiple-choice-picture':
        return <PictureQuestion questionObj={q} handleNext={this.handleNext} />;

      case 'text-multiline':
        return <TextQuestion questionObj={q} handleNext={this.handleNext} />;

      case "load":
        return "Loading"

      default:
        return "Not built";
    }
  }

  render() {
    const { currentQuestion, answeredQuestions } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <QuestionNav
          handleRestart={this.restart}
          handlePrev={this.previous}
          answeredQuestions={answeredQuestions}
        />
        {this.renderSwitch(currentQuestion)}
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionContainer);

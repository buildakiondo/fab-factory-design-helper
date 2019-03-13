import paths from './paths/paths.json';

// When this goes server-side, this should no longer be global
const report = {};

function getCurrentState(state) {
  return paths[state];
}

function changeState(currentState, answer) {
  let nextState = null;
  let reportData = null;
  let found = 0;

  if (paths[currentState].type !== 'question') {
    throw new Error("Can't select next state, current state is not a question");
  }

  const { options } = paths[currentState].data;
  options.forEach((option) => {
    if (option.text === answer) {
      found += 1;
      ({ nextState } = option);
      ({ reportData } = option);
    }
  });

  if (nextState === null) {
    throw new Error('Next state not available in node');
  } else if (found > 1) {
    throw new Error('More than one state found with that name');
  }

  report[paths[currentState].name] = reportData;
  return paths[nextState];
}

function getReport() {
  return report;
}

export default {
  getCurrentState,
  changeState,
  getReport,
};

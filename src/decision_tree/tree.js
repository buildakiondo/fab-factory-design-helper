import paths from './paths/paths.json';

function getCurrentState(state) {
  return paths[state];
}

function changeState(currentState, nextState) {
  if (paths[currentState].type !== 'question') {
    throw new Error("Can't select next state, current state is not a question");
  }

  let found = 0;
  const { options } = paths[currentState].data;
  options.forEach((option) => {
    if (option.nextState === nextState) {
      found += 1;
    }
  });

  if (found === 0) {
    throw new Error('Next state not available in node');
  }

  return paths[nextState];
}

// Need getReport function

export default {
  getCurrentState,
  changeState,
};

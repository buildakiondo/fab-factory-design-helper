import Tree from './tree';


it('does some backend logic', () => {
  let errors = 0;
  let state = null;

  state = Tree.getCurrentState('question1');
  expect(state.name).toEqual('question1');

  state = Tree.changeState(state.name, 'question2');
  expect(state.name).toEqual('question2');

  try {
    state = Tree.changeState(state.name, 'fail');
  } catch (error) {
    errors += 1;
  }
  expect(errors).toEqual(1);
});

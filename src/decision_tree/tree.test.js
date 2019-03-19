import Tree from './tree';
import videos from './recommendations/videos';


it('does some backend logic', () => {
  let errors = 0;
  let state = null;

  state = Tree.getCurrentState('base-need');
  expect(state.name).toEqual('base-need');

  state = Tree.changeState(state.name, 'space-use', { answer: 'productive' });
  expect(state.name).toEqual('space-use');

  state = Tree.changeState(state.name, 'space-want', { answer: 'relax' });
  expect(state.name).toEqual('space-want');

  try {
    state = Tree.changeState(state.name, 'fail');
  } catch (error) {
    errors += 1;
  }
  try {
    state = Tree.changeState(state.name, 'day-describe', { answer: 'fail' });
  } catch (error) {
    errors += 1;
  }
  expect(errors).toEqual(2);
});

it('Check if the tags match', () => {
  let misses = 0;
  const tags = [
    'chair',
    'diy',
  ];

  const recommendations = Tree.processTags(tags);
  let amount = 0;
  if (recommendations) {
    amount = Object.keys(recommendations).length;

    recommendations.forEach((recommendation) => {
      recommendation.tags.forEach((recommendedTag) => {
        if (!tags.find(tag => tag === recommendedTag)) {
          misses += 1;
          throw new Error(`Recommendation ${recommendation.title} does not match the tags`);
        }
      });
    });
  }

  let correctAmount = 0;
  const videoArray = Object.values(videos);
  videoArray.forEach((video) => {
    const tagNum = video.tags.length;
    let matches = 0;
    video.tags.forEach((tag) => {
      if (tags.find(compareTag => compareTag === tag)) matches += 1;
    });
    if (tagNum === matches) correctAmount += 1;
  });
  expect(misses).toBe(0);
  expect(amount).toBe(correctAmount);
});

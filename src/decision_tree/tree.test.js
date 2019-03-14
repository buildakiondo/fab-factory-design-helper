import Tree from './tree';
import videos from './recommendations/videos';


it('does some backend logic', () => {
  let errors = 0;
  let state = null;
  let report = null;
  const expectedReport = {
    question1: {
      example: 1,
      tags: ['chair'],
    },
    question2:
    {
      example: 1,
      tags: ['diy'],
    },
    recommendations: [
      {
        description: 'This is how you build a chair',
        link: 'https://www.youtube.com/watch?v=Yu9LbvUfCgg',
        tags: [
          'chair', 'diy',
        ],
        title: 'Build A Chair',
      },
    ],
    tags: [
      'chair',
      'diy',
    ],
  };

  state = Tree.getCurrentState('question1');
  expect(state.name).toEqual('question1');

  state = Tree.changeState(state.name, 'option1');
  expect(state.name).toEqual('question2');

  state = Tree.changeState(state.name, 'option1');
  expect(state.name).toEqual('question1');

  try {
    state = Tree.changeState(state.name, 'fail');
  } catch (error) {
    errors += 1;
  }
  expect(errors).toEqual(1);

  report = Tree.getReport();

  expect(report).toEqual(expectedReport);
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

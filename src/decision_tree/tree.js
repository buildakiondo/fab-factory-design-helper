import paths from './paths/paths.json';
import videos from './recommendations/videos';

// When this goes server-side, this should no longer be global
const report = { tags: [] };

function getCurrentState(state) {
  return paths[state];
}

function changeState(currentState, answer) {
  let nextState = null;
  let reportData = null;
  let tags = null;
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
      ({ tags } = option.reportData);
    }
  });

  if (nextState === null) {
    throw new Error('Next state not available in node');
  } else if (found > 1) {
    throw new Error('More than one state found with that name');
  }

  report[paths[currentState].name] = reportData;

  if (tags) {
    tags.forEach(tag => report.tags.push(tag));
  }
  return paths[nextState];
}

function processTags(userTags) {
  const recommendations = [];
  // Go through each video...
  const videoArray = Object.values(videos);
  videoArray.forEach((video) => {
    // Check if each of the tags...
    const tagNum = video.tags.length;
    let matches = 0;
    video.tags.forEach((videoTag) => {
      // Match one of the tags given
      if (userTags.find(userTag => videoTag === userTag)) matches += 1;
    });

    if (tagNum === matches) {
      recommendations.push(video);
    }
  });
  return recommendations;
}

function getReport() {
  report.recommendations = processTags(report.tags);
  return report;
}

export default {
  getCurrentState,
  changeState,
  processTags,
  getReport,
};

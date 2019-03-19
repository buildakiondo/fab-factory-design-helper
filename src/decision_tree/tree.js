import paths from './paths/paths.json';
import videos from './recommendations/videos';

// When this goes server-side, this should no longer be global
const report = { tags: [] };

function getCurrentState(state) {
  return paths[state];
}

function changeState(currentState, nextState, data) {
  if (data) {
    const tags = [];

    report[paths[currentState].name] = data;

    if (Object.prototype.hasOwnProperty.call(data, 'option')) {
      const { option } = data;
      let optionData = null;
      let optionTags = null;

      let found = 0;

      const { currentOptions } = paths[currentState].data;
      currentOptions.forEach((currentOption) => {
        if (currentOption.text === option) {
          found += 1;
          ({ optionData } = currentOption);
          if (optionData) {
            optionTags = currentOption.optionData.tags;
          }
        }
      });

      if (found !== 1) {
        throw new Error('Amount of matching options does not equal 1');
      }

      report[paths[currentState].name].optionData = optionData;

      if (optionTags) {
        optionTags.forEach(tag => tags.push(tag));
      }
    }

    tags.forEach(tag => report.tags.push(tag));
  }

  if (!paths[nextState]) {
    throw new Error('Next state not available');
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

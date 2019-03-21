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

    if (Object.prototype.hasOwnProperty.call(data, 'answer')) {
      const { answer } = data;
      let reportData = null;
      let reportTags = null;

      let found = 0;

      const { options } = paths[currentState].data;
      options.forEach((currentOption) => {
        if (currentOption.text === answer) {
          found += 1;
          ({ reportData } = currentOption);
          if (reportData) {
            reportTags = currentOption.reportData.tags;
          }
        }
      });

      if (found !== 1) {
        throw new Error('Amount of matching options does not equal 1');
      }

      report[paths[currentState].name].optionData = reportData;
      if (reportTags) {
        reportTags.forEach(tag => tags.push(tag));
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

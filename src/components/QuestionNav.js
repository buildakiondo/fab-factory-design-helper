import { IconButton, Toolbar, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PrevIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import RestartIcon from '@material-ui/icons/RefreshRounded';
import React from 'react';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'block',
    backgroundColor: theme.palette.background.main,
    color: theme.palette.tertiary.main,
    minHeight: 0,
    borderRadius: 8,
    padding: theme.spacing.unit,
    zIndex: 100,
  },
});

function QuestionNav({
  handlePrev,
  handleRestart,
  classes,
  answeredQuestions,
}) {
  return (
    <Toolbar className={classes.root} variant="dense">
      <Tooltip title="Previous question" placement="bottom">
        <span>
          <IconButton onClick={handlePrev} disabled={!answeredQuestions.length}>
            <PrevIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Start again" placement="bottom">
        <span>
          <IconButton
            disabled={!answeredQuestions.length}
            onClick={handleRestart}
          >
            <RestartIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Toolbar>
  );
}

export default withStyles(styles)(QuestionNav);

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import classNames from 'classnames';
import React from 'react';

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  label: {
    backgroundColor: theme.palette.background.main,
    fontWeight: 700,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    borderRadius: 8,
    height: '100%',
    lineHeight: 1.2,
    position: 'relative',
    display: 'inline-block',
    '&::before': {
      content: `""`,
      display: 'block',
      border: '8px solid transparent',
      borderTopColor: theme.palette.background.main,
      top: '100%',
      position: 'absolute',
    },
  },
  labelRight: {
    textAlign: 'right',
    borderBottomRightRadius: 0,
    '&::before': {
      borderRightColor: theme.palette.background.main,
      right: 0,
    },
  },
  labelLeft: {
    textAlign: 'left',
    borderBottomLeftRadius: 0,
    '&::before': {
      borderLeftColor: theme.palette.background.main,
      left: 0,
    },
  },
  slider: {
    padding: `${theme.spacing.unit * 2}px 0`,
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  trackBefore: {
    backgroundColor: theme.palette.secondary.main,
  },
  thumb: {
    width: 20,
    height: 20,
  },
  alignRight: {
    textAlign: 'right',
  },
  textLabel: {
    fontWeight: 700,
    color: theme.palette.primary.main,
    fontSize: 22,
  },
});

class ResponseSlider extends React.Component {
  render() {
    const {
      classes,
      upperLimitLabel,
      lowerLimitLabel,
      max,
      min,
      label,
      value,
      handleChange,
    } = this.props;

    return (
      <div className={classes.root}>
        {label && (
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.textLabel}
          >
            {label}
          </Typography>
        )}
        <Grid container spacing={16}>
          <Grid item xs={6} style={{ opacity: 1 - value / 120 }}>
            {lowerLimitLabel && (
              <Typography
                className={classNames(classes.label, classes.labelLeft)}
              >
                {lowerLimitLabel}
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={6}
            className={classes.alignRight}
            style={{ opacity: 0.2 + value / 80 }}
          >
            {upperLimitLabel && (
              <Typography
                className={classNames(classes.label, classes.labelRight)}
              >
                {upperLimitLabel}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Slider
              classes={{
                container: classes.slider,
                track: classes.track,
                thumb: classes.thumb,
                trackBefore: classes.trackBefore,
              }}
              step={10}
              max={max}
              min={min}
              value={value}
              aria-labelledby="label"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ResponseSlider);

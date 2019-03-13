import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import QuestionContainer from '../components/QuestionContainer';

const styles = makeStyles({
  appContainer: {
    display: 'flex',
    minHeight: '100vh',
    flexFlow: 'column',
  },
  grow: {
    flexGrow: 1,
  },
});

function Main() {
  const classes = styles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <Content className={classes.grow}>
        <QuestionContainer />
      </Content>
      <Footer />
    </div>
  );
}

export default Main;

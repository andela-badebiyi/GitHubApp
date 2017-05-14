import Main from './containers/Main';
import store from './redux/store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

export default class AppGitHub extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
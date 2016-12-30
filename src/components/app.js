import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import StartContainer from './start/start-container';
import Resource from './resource/resource';

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={StartContainer} />
          <Route path="/resource" component={Resource} />
        </Router>
      </MuiThemeProvider>
    );
  }

}

App.propTypes = {
};

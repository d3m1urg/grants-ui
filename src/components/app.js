import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Start from './start/start';

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={Start} />
        </Router>
      </MuiThemeProvider>
    );
  }

}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

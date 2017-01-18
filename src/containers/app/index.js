import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import StartContainer from '../start/connector';
import CreateResource from '../create-resource';

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="/" component={StartContainer} />
          <Route path="/create" component={CreateResource} />
        </Router>
      </MuiThemeProvider>
    );
  }

}

App.propTypes = {
};

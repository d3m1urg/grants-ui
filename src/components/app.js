import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Provider } from 'react-redux';

import Start from './start/start';

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      {/* <Provider store={this.props.store}> */}
        <Router history={browserHistory}>
          <Route path="/" component={Start} />
        </Router>
      {/* </Provider> */}
      </MuiThemeProvider>
    );
  }

}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};

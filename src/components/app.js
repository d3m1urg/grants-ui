import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';

import Root from './root/root';

class App extends Component {

  render() {
    return (
      // <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={Root} />
        </Router>
      // </Provider>
    );
  }

}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;

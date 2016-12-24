import React, { Component, PropTypes } from 'react';

import './root.css';

class Root extends Component {

  render() {
    return (
      <div className="row center-xs middle-xs">
        <div className="col-xs-6">
          <div className="box">
            <span>Root component</span>
          </div>
        </div>
      </div>
    );
  }

}

export default Root;

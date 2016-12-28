import React from 'react';
import Drawer from 'material-ui/Drawer';

import './root.css';

export default class Root extends React.Component {

  render() {
    return (
      <div>
        <Drawer
          open={this.props.open}
          onRequestChange={this.props.onMenuClick}
          docked={false} />
        <div className="root-container">
          <div className="header-bar">
            {this.props.appBar}
          </div>
          <div className="main">
            <div className="root-container">
              <div className="header-bar">
                {this.props.toolBar}
              </div>
              <div className="main">
                {this.props.mainArea}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

Root.propTypes = {
};

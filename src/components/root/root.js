import React from 'react';
import AppBar from 'material-ui/AppBar';
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
            <AppBar title="Grants UI Control" onLeftIconButtonTouchTap={this.props.onMenuClick} />
          </div>
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

Root.propTypes = {
};

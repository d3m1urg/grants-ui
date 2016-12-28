import React from 'react';


import Root from '../root/root';
import AppBar from '../app-bar/app-bar';
import ToolBar from '../toolbar/toolbar';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideMenuVisible: false,
    };
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMenuClick() {
    this.setState({
      sideMenuVisible: !this.state.sideMenuVisible,
    });
  }

  render() {
    return (
      <div>
        <Root appBar={<AppBar onMenuClick={this.onMenuClick} />}
              toolBar={<ToolBar />}
              onMenuClick={this.onMenuClick}
              open={this.state.sideMenuVisible} />
      </div>
    );
  }
}

Start.propTypes = {
};

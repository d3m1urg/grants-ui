import React from 'react';

import ConnectRoot from '../root/connect-root';
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
        <ConnectRoot />
      </div>
    );
  }
}

Start.propTypes = {
};

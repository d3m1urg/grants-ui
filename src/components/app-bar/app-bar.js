import React from 'react';
import MUIAppBar from 'material-ui/AppBar';

export default class AppBar extends React.Component {

  render() {
    return (
      <MUIAppBar title="Grants UI Control" onLeftIconButtonTouchTap={this.props.onMenuClick} />
    );
  }
}

AppBar.propTypes = {
};

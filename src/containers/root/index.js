import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AddCircleIcon from 'material-ui/svg-icons/content/add-circle';
import { Link } from 'react-router';

import './root.css';

export default class Root extends React.Component {

  render() {
    return (
      <div>
        <Drawer
          open={this.props.open}
          onRequestChange={this.props.onMenuClick}
          docked={false}>
          <List>
            <Link to="/">
              <ListItem primaryText="Home" leftIcon={<HomeIcon />} onClick={this.props.onMenuClick} />
            </Link>
            <Link to="/create">
              <ListItem primaryText="Create resource" leftIcon={<AddCircleIcon />} onClick={this.props.onMenuClick} />
            </Link>
          </List>
        </Drawer>
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
  open: React.PropTypes.bool.isRequired,
  onMenuClick: React.PropTypes.func.isRequired,
  /*children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),*/
};

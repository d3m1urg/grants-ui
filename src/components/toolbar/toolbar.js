import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar as MUIToolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default class Toolbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MUIToolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Resource" />
          <RaisedButton label="Add" primary />
          <RaisedButton label="Update" primary />
          <RaisedButton label="Delete" primary />
        </ToolbarGroup>
      </MUIToolbar>
    );
  }
}

Toolbar.propTypes = {
};

import React from 'react';
import { Treebeard, theme } from 'react-treebeard';

import RaisedButton from 'material-ui/RaisedButton';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

import RootContainer from '../root/connector';

import RootEditor from '../../components/root-editor';

import './styles.scss';

const data = {
  name: 'resourceName',
  toggled: true,
  active: true,
  children: [
    {
      name: 'parent',
      children: [
        { name: 'child1' },
        { name: 'child2' },
      ],
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [
            { name: 'nested child 1' },
            { name: 'nested child 2' },
          ],
        },
      ],
    },
  ],
};

export default class CreateResource extends React.Component {

  constructor(props) {
    super(props);
    this.state = { cursor: data };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled) {
    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    this.setState({ cursor: node });
  }

  render() {
    const styles = Object.assign({}, theme);
    styles.tree.base.backgroundColor = 'rgb(255, 255, 255)';
    styles.tree.base.color = 'rgb(0, 0, 0)';
    styles.tree.node.activeLink.background = 'rgb(0, 188, 212)';
    styles.tree.node.link.color = 'rgb(255, 255, 255)';
    styles.tree.node.header.base.color = 'rgb(0, 0, 0)';
    styles.tree.node.toggle.arrow.fill = 'rgb(0, 0, 0)';
    return (
      <RootContainer>
        <div className="create-resource-container">
          <div className="create-resource-toolbar">
            <Toolbar>
              <ToolbarGroup firstChild>
                <RaisedButton label="Save draft" primary />
                <RaisedButton label="Discard" primary />
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label="boolean" primary />
                <RaisedButton label="1 2 3" primary />
                <RaisedButton label="a b c" primary />
                <RaisedButton label="[A, B, C]" primary />
                <RaisedButton label="1 - 9" primary />
              </ToolbarGroup>
            </Toolbar>
          </div>
          <div className="create-resource-left-panel">
            <Treebeard data={data} onToggle={this.onToggle} style={styles} />
          </div>
          <div className="create-resource-center-panel">
            <RootEditor />
          </div>
        </div>
      </RootContainer>
    );
  }
}

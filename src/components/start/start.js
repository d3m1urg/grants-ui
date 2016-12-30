import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import RootContainer from '../root/root-container';
import ToolBar from '../toolbar/toolbar';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RootContainer>
          <RaisedButton label="Default" onClick={this.props.onClick} />
        </RootContainer>
      </div>
    );
  }
}

Start.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

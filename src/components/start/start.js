import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import RootContainer from '../root/root-container';
// import ToolBar from '../toolbar/toolbar';
import Tagbox from '../tagbox/tagbox';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RootContainer>
          <RaisedButton label="Default" onClick={this.props.onClick} />
          <div style={{ width: '400px', border: '1px solid black' }}>
            <Tagbox />
          </div>
        </RootContainer>
      </div>
    );
  }
}

Start.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

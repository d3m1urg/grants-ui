import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import RootContainer from '../root/connector';
// import ToolBar from '../toolbar/toolbar';
import Tagbox from '../../components/tagbox/tagbox';

import Joint from '../../link/joint';
import Subjoint from '../../link/subjoint';

// import CodeMirror from 'react-codemirror';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/lib/codemirror.css';

export default class Start extends React.Component {

  constructor(props) {
    super(props);
    this.tagsChanged = this.tagsChanged.bind(this);
  }

  tagsChanged(selectedTags) {
    console.log(selectedTags);
  }

  render() {
    const data = [
      {
        tagContent: 'one',
        tagValue: 1,
      },
      {
        tagContent: 'two',
        tagValue: 2,
      },
    ];
    return (
      <div>
        <RootContainer>
          <Joint store={data}>
            <RaisedButton label="Default" onClick={this.props.onClick} />
            <Subjoint />
          </Joint>
          <div style={{ width: '400px', border: '1px solid black' }}>
            <Tagbox dataSource={data} dataSourceConfig={{ text: 'tagContent', value: 'tagValue' }} name="RulesTaggedInput" onTagsChanged={this.tagsChanged} />
          </div>
        { /*<CodeMirror options={{ mode: 'javascript', lineNumbers: true }} />*/ }
        </RootContainer>
      </div>
    );
  }
}

Start.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};

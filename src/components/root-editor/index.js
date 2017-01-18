import React from 'react';
import TextField from 'material-ui/TextField';
import Tagbox from '../../components/tagbox/tagbox';

export default class RootEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resource-editor-form">
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth
        />
        <TextField
          hintText="Screen name"
          floatingLabelText="Screen name"
          fullWidth
        />
        <TextField
          hintText="Revision"
          floatingLabelText="Revision"
          fullWidth
        />
        <Tagbox
          dataSource={[{
            tagContent: 'one',
            tagValue: 1,
          },
          {
            tagContent: 'two',
            tagValue: 2,
          }]}
          dataSourceConfig={{ text: 'tagContent', value: 'tagValue' }}
          name="RulesTaggedInput"
          onTagsChanged={this.tagsChanged}
          arbitraryInput
        />
      </div>
    );
  }
}

RootEditor.propTypes = {
};

RootEditor.defaultProps = {
};

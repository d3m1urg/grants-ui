import React from 'react';

import AutoComplete from 'material-ui/AutoComplete';

import Tag from './tag';

import './tagbox.scss';

export default class Tagbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onRemoveTag = this.onRemoveTag.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
    this.filter = this.filter.bind(this);
    this.onUpdateInput = this.onUpdateInput.bind(this);
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case 8:
        if (!this.state.currentInput && this.state.selectedTags.length > 0) {
          if (this.state.markedForDelete) {
            this.removeTag(this.state.selectedTags.length - 1);
          } else {
            this.setState({ markedForDelete: true });
          }
        }
        break;
      case 40:
        if (!this.state.currentInput || this.state.currentInput.length === 0) {
          this.setState({ openMenu: true, error: '' });
        }
        break;
      default:
        if (this.state.markedForDelete) {
          this.setState({ markedForDelete: false });
        }
        if (this.state.error) {
          this.setState({ error: '' });
        }
        break;
    }
  }

  filter(input, key) {
    if (this.state.openMenu) {
      return true;
    }
    return input !== '' && key.indexOf(input) !== -1;
  }

  onNewRequest(request, index) {
    if (index >= 0) {
      const updSelectedTags = [...this.state.selectedTags, index];
      this.setState({ selectedTags: updSelectedTags, currentInput: '', error: '', markedForDelete: false, openMenu: false });
      if (this.inputField) {
        this.inputField.focus();
      }
      return;
    }
    const foundIndex = this.props.dataSource.findIndex(item => item[this.props.dataSourceConfig.text] === request);
    if (foundIndex >= 0) {
      this.onNewRequest(this.props.dataSource[foundIndex], foundIndex);
    } else {
      this.setState({ error: 'Invalid input' });
    }
  }

  onUpdateInput(input) {
    this.setState({ currentInput: input });
  }

  removeTag(id) {
    const selectedTags = [...this.state.selectedTags];
    selectedTags.splice(id, 1);
    this.setState({ selectedTags });
  }

  onRemoveTag(id) {
    this.setState({ markedForDelete: false });
    this.removeTag(id);
    if (this.inputField) {
      this.inputField.focus();
    }
  }

  renderTags() {
    return this.state.selectedTags.map((tagIndex, index, array) =>
      (<Tag
        tagContent={this.props.dataSource[tagIndex].tagContent}
        tagId={index}
        tagMarked={this.state.markedForDelete && index === array.length - 1}
        onRemovePressed={this.onRemoveTag}
        key={index} />));
  }

  render() {
    return (
      <div className="tagbox-container">
        {this.renderTags()}
        <div className="tagbox-input-container">
          <AutoComplete
            onKeyDown={this.onKeyDown}
            onNewRequest={this.onNewRequest}
            onUpdateInput={this.onUpdateInput}
            dataSource={this.props.dataSource}
            dataSourceConfig={this.props.dataSourceConfig}
            name={this.props.name}
            open={this.state.openMenu}
            filter={this.filter}
            menuCloseDelay={0}
            searchText={this.state.currentInput}
            errorText={this.state.error}
            fullWidth
            ref={(elem) => { this.inputField = elem ? elem.refs.searchTextField : null; }} />
        </div>
      </div>
    );
  }
}

Tagbox.propTypes = {
};

Tagbox.defaultProps = {
  dataSource: [],
  dataSourceConfig: { text: 'tagText', value: 'tagValue' },
  name: 'tagboxInput',
  selectedTags: [],
  markedForDelete: false,
  openMenu: false,
};

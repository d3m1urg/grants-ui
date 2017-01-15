import React from 'react';
import classnames from 'classnames';

import Tag from './tag';

import './tagbox.scss';

export default class Tagbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      marked: false,
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onRemoveTag = this.onRemoveTag.bind(this);
  }

  onKeyDown(event) {
    const value = this.tagInput.value;
    switch (event.keyCode) {
      case 13:
        if (value) {
          const data = [...this.state.data, { tagClass: 'tagbox-tag', tagContent: value }];
          this.tagInput.value = '';
          this.setState({ data, marked: false });
        }
        break;
      case 8:
        if (!value) {
          if (this.state.marked && this.state.data.length > 0) {
            this.onRemoveTag(this.state.data.length - 1);
          } else {
            this.setState({ marked: true });
          }
        }
        break;
      default:
        if (this.state.marked) {
          this.setState({ marked: false });
        }
        break;
    }
  }

  onRemoveTag(id) {
    const data = [...this.state.data];
    data.splice(id, 1);
    this.setState({ data });
    this.tagInput.focus();
  }

  renderTags() {
    return this.state.data.map((tag, index, array) => {
      const tagClass = classnames({
        'tagbox-tag': true,
        'tagbox-tag-marked': this.state.marked && index === array.length - 1,
      });
      return (<Tag
        tagClass={tagClass}
        tagContent={tag.tagContent}
        tagId={index}
        onRemovePressed={this.onRemoveTag}
        key={index} />);
    });
  }

  render() {
    return (
      <div className="tagbox-container">
        {this.renderTags()}
        <div className="tagbox-input-container">
          <input
            className="tagbox-input"
            onKeyDown={this.onKeyDown}
            ref={(input) => { this.tagInput = input; }} />
        </div>
      </div>
    );
  }
}

Tagbox.propTypes = {
};

import React from 'react';

import Chip from 'material-ui/Chip';

export default class Tag extends React.Component {

  constructor(props) {
    super(props);
    this.onRemovePressed = this.onRemovePressed.bind(this);
  }

  onRemovePressed() {
    this.props.onRemovePressed(this.props.tagId);
  }

  render() {
    return (
      <div className="tagbox-internal">
        <Chip
          onRequestDelete={this.onRemovePressed}
          backgroundColor={this.props.tagMarked ? 'rgb(255,0,0)' : undefined}>
          {this.props.tagContent}
        </Chip>
      </div>
    );
  }
}

Tag.propTypes = {
  tagId: React.PropTypes.number.isRequired,
  tagContent: React.PropTypes.string.isRequired,
  tagMarked: React.PropTypes.bool,
  onRemovePressed: React.PropTypes.func.isRequired,
};

Tag.defaultProps = {
  onRemovePressed: () => {},
};

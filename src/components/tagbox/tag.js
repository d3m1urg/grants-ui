import React from 'react';

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
      <div className={this.props.tagClass}>
        <div style={{ display: 'flex', alignItems: 'center', color: '#ffffff' }}>
          {this.props.tagContent}
          <span className="tagbox-close" onClick={this.onRemovePressed}>&times;</span>
        </div>
      </div>
    );
  }
}

Tag.propTypes = {
  tagId: React.PropTypes.number.isRequired,
  tagClass: React.PropTypes.string.isRequired,
  tagContent: React.PropTypes.string.isRequired,
  onRemovePressed: React.PropTypes.func.isRequired,
};

Tag.defaultProps = {
  onRemovePressed: () => {},
};

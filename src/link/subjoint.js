import React from 'react';

import Joint from './joint';

export default class Subjoint extends Joint {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.store}</div>
    );
  }
}

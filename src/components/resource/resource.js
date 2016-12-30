import React from 'react';

import RootContainer from '../root/root-container';

export default class Resource extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RootContainer>
          Resource data page
        </RootContainer>
      </div>
    );
  }
}

Resource.propTypes = {
};

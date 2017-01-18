import React, { isValidElement, cloneElement, createElement } from 'react';

export default class Joint extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const children = this.props.children.map((item) => {
      console.log(item)
      if (isValidElement(item) && item instanceof Joint) {
        return cloneElement(item, { store: this.props.store }, ...item.children);
      }
      return item;
    });
    return (
      <div>{children}</div>
    );
  }

}

import React from 'react';

export default (component) => {
  class ScrollUpComponent extends React.Component {
    componentWillMount() {
      window.scrollTo(0, 0);
    }

    render() {
      return React.createElement(component, Object.assign(this.props, {}));
    }
  }

  return ScrollUpComponent;
}

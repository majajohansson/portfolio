import React from 'react';

const calculateScrollPercent = (pageElement) => {
  const totalScrolling = pageElement.offsetHeight - window.innerHeight;
  if (totalScrolling === 0) return 0;

  return Math.round(100 * window.pageYOffset / totalScrolling) / 100;
}

export default (WrappedComponent) => {
  class ScrollPercentAware extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrollPercent: 0,
      };
      this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
      window.document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
      window.document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
      const scrollPercent = calculateScrollPercent(this.props.pageRef.current);
      if (scrollPercent !== this.state.scrollPercent) this.setState({ scrollPercent });
    }

    render() {
      return <WrappedComponent scrollPercent={this.state.scrollPercent} {...this.props} />;
    }
  }

  return ScrollPercentAware;
}

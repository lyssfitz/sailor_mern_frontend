import { Component } from "react";

// Small plugin to scroll to top when component mounts.
// Imported into several parent components
class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
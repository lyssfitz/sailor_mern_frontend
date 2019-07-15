import React, { Component } from "react";
import { connect } from "react-redux";
// import InterestsModal from "./InterestsModal"
import { showModal } from "./../../actions"

class FeedPage extends Component {
  componentDidMount = () => {
    this.props.showModal();
  }

  render() {
    return (
      <>
        {/* <InterestsModal /> */}
        <h1>Feed</h1>
      </>
    );
  }
}

export default connect(null, { showModal })(FeedPage);
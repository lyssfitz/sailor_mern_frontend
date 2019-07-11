import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <>
        <h1>Welcome to SailorMERN</h1>
        <div>
          <Link to="/login">login</Link>
          <Link to="/signup">signup</Link>
        </div>
      </>
    );
  }
}

export default LandingPage;

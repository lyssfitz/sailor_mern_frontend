import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

class LandingPage extends Component {
  render() {
    return (
      <>
        <h1>Welcome to SailorMERN</h1>
        <div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </>
    );
  }
}

export default LandingPage;

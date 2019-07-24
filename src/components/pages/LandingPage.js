import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Landing = styled.div`
  text-align: center;
`;

const HeadingLg = styled.h1`
  font-size: 3em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 5em;
  }
`;

const HeadingSm = styled.h2`
  font-size: 2em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

const Line = styled.div`
  border-top: 6px solid #EEE;
  max-width: 500px;
  margin: 20px auto;
`;

const StartButton = styled(Button)`
  margin-top: 30px;
  font-weight: bold;
`;

class LandingPage extends Component {
  render() {
    return (
      <Landing>
        <HeadingLg>Stay in the loop.</HeadingLg>
        <Line />
        <HeadingSm>Up-to-date health news, all in one place.</HeadingSm>
        <Link to="/signup">
          <StartButton type="primary" size="large" shape="round">Get Started</StartButton>
        </Link>
      </Landing>
    );
  }
}

export default LandingPage;

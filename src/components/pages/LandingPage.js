import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Landing = styled.div`
  text-align: center;
`;

const HeadingLg = styled.h1`
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
  padding: 0;
`;

const HeadingSm = styled.h2`
  font-size: 2em;
  font-weight: bold;
  letter-spacing: -1px;
  margin: 0;
`;

const Line = styled.hr`
  border: 2px solid #EEE;
  border-radius: 5px;
  max-width: 500px;
  margin: 20px auto;
`;

const StartButton = styled(Button)`
  margin-top: 20px;
  font-weight: bold;
`;

class LandingPage extends Component {
  render() {
    return (
      <Landing>
        <HeadingLg>Heading 1</HeadingLg>
        <HeadingLg>Heading 2</HeadingLg>
        <Line />
        <HeadingSm>Heading 3</HeadingSm>
        <Link to="/signup">
          <StartButton type="primary" size="large" shape="round">Get Started</StartButton>
        </Link>
      </Landing>
    );
  }
}

export default LandingPage;

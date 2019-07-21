import React, { Component } from "react";
import styled from "styled-components";

const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: auto;
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: 10fr 1fr 0.3fr;
  }
`;

const InfoHeader = styled.h1`
  writing-mode: horizontal;
  font-size: 3em;
  margin: 0 0 0 30px;
  letter-spacing: -1px;
  grid-column: 1 / span 1;

  @media (min-width: 768px) {
    margin: 0 0 0 0;
    writing-mode: vertical-rl;
    font-size: 4em;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
`;

const InfoBody = styled.div`
  grid-column: 1 / span 1;
  font-size: 1.2em;

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
`;

const InfoSeparator = styled.div`
  grid-column: 1 / span 1;
  width: 30px;
  border-left: 0px solid black;
  border-bottom: 6px solid black;

  @media (min-width: 768px) {
    grid-column: 3 / span 1;
    height: 30px;
    border-left: 6px solid black;
    border-bottom: 0px solid black;
    grid-row: 1 / span 1;
  }
`;

class InfoPage extends Component {
  render() {
    return (
      <InfoContainer>
        <InfoSeparator />
        <InfoHeader>{this.props.heading}</InfoHeader>
        <InfoBody>{this.props.children}</InfoBody>
      </InfoContainer>
    );
  }
}

export default InfoPage;
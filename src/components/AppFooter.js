import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
// import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Footer } = Layout;

const MainFooter = styled(Footer)`
  display: grid;
  grid-template-rows: max-content max-content;
  grid-row-gap: 30px;
  text-align: center;
`;

const Links = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: max-content;
  margin: auto;

  @media (min-width: 501px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Copy = styled.div`
  grid-row: 2;
  font-size: 0.9em;
`;

class AppFooter extends Component {
  render() {
    return (
      <MainFooter>
        <Links>
          <Link to="#">Log In</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Help</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Privacy Policy</Link>
        </Links>
        <Copy>
          Sailor MERN © 2019
        </Copy> 
      </MainFooter>
    );
  }
}

export default AppFooter;
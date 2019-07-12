import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const MainHeader = styled(Header)`
  background-color: #f0f2f5;
  padding: 0;
`;

const MainLogo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #DDD;
  margin: 16px 24px;
  float: left;
  border-radius: 50%;
`;

const MainMenu = styled(Menu)`
  line-height: 64px;
  text-align: right;
  width: 100%;
  background: transparent;
`;

class AppHeader extends Component {
  render() {
    return (
      <MainHeader>
        <MainLogo />
        <MainMenu mode="horizontal">    
          <Menu.Item key="1">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </MainMenu>
      </MainHeader>
    );
  }
}

export default AppHeader;
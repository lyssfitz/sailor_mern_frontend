import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const logostyle = {
  width: "120px",
  height: "31px",
  background: "rgba(255, 255, 255, 0.2)",
  margin: "16px 24px 16px 0",
  float: "left"
}

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <div className="logo" style={logostyle} />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >    
          <Menu.Item key="1">
            <Link to="/signup">Sign Up</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
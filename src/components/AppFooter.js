import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from 'antd';
const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>Sailor MERN © 2019</Footer>
    );
  }
}

export default AppFooter;
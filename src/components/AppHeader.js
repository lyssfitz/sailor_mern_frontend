import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components"
import { Layout, Menu, Icon, Dropdown } from 'antd';
import { connect } from "react-redux";
import { removeAuthToken } from "./../actions";

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
  border-radius: 10px;
`;

const MainMenu = styled(Menu)`
  line-height: 64px;
  text-align: right;
  width: 100%;
  background: transparent;
  border-bottom: 0px;
`;

const MenuItem = styled(Menu.Item)`
`;

const icon = {
  fontSize: "1.5em",
  paddingTop: "20px"
}


// const AppHeader = (props) => {
class AppHeader extends Component {

  onLogoutClick = () => {
    this.props.removeAuthToken();
    return <Redirect to="/" />;
  }

  render() {
    const { token } = this.props;


    if (token) {
      const dropdownItems = (
        <Menu>
          <MenuItem>
            <Link to="#">
              View Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={this.onLogoutClick}>
              Logout
          </MenuItem>
        </Menu>
      );
  
      return (
        <MainHeader>
          <MainLogo />
          <MainMenu mode="horizontal">    
            <MenuItem key="1">
              <Link to="/notifications"><Icon style={icon} type="bell"/></Link>
            </MenuItem>
            <MenuItem className="userprofile" key="2">
              <Dropdown overlay={dropdownItems} trigger={['click']}>
                <Link to="#">
                  <Icon style={icon} type="user" />
                </Link>
              </Dropdown>
            </MenuItem>
          </MainMenu>
        </MainHeader>
      );
    }
  
    return (
      <MainHeader>
        <MainLogo />
        <MainMenu mode="horizontal">    
          <MenuItem key="1">
            <Link to="/signup">Sign Up</Link>
          </MenuItem>
          <MenuItem key="2">
            <Link to="/login">Login</Link>
          </MenuItem>
        </MainMenu>
      </MainHeader>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
};


export default connect(mapStateToProps, { removeAuthToken })(AppHeader);
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components"
import { Menu, Icon, Dropdown, Button } from 'antd';
import InterestsModal from "./pages/InterestsModal";
import { connect } from "react-redux";
import { removeAuthToken, showInterestsModal } from "./../actions";

const MainHeader = styled.header`
  padding: 20px;
  display: grid;
  grid-template-columns: 50px 1fr;
  border-bottom: 1px solid #EEE;
`;

const MainLogo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #DDD;
  border-radius: 10px;
  grid-column: 1;
`;

const MainMenu = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > * {
    margin-left: 20px;
  }
`;


const icon = {
  fontSize: "1.5em",
}


// const AppHeader = (props) => {
class AppHeader extends Component {

  onLogoutClick = () => {
    this.props.removeAuthToken();
    return <Redirect to="/" />;
  }

  render() {
    const { token, userInterests } = this.props;

    if (token) {
      const dropdownUserItems = (
        <Menu>
          <Menu.Item>
            <Link to="/profile">
              View Profile
            </Link>
          </Menu.Item>
          <Menu.Item onClick={this.onLogoutClick}>
              Logout
          </Menu.Item>
        </Menu>
      );
  
      return (
        <>
        <InterestsModal />
        <MainHeader>
          <MainLogo />
          <MainMenu>    

            <Button onClick={this.props.showInterestsModal}>
              Edit Interests
            </Button>

            <Button href="/feed" type="primary">
              View Feed
            </Button>

            {userInterests && userInterests.length > 0 &&
                <Dropdown overlay={
                  <Menu>
                  {userInterests.map((interest) => {
                    return (
                      <Menu.Item key={interest}>
                        <Link to={{ pathname: `/feed/${interest.replace(" ", "-")}` }}>
                          {interest}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </Menu>
                } trigger={['click']}>
                  <Link to="#">
                    <Icon style={icon} type="filter" />
                  </Link>
                </Dropdown>
            }

            <Link to="/notifications"><Icon style={icon} type="bell"/></Link>


            <Dropdown overlay={dropdownUserItems} trigger={['click']}>
              <Link to="#">
                <Icon style={icon} type="user" />
              </Link>
            </Dropdown>


          </MainMenu>
        </MainHeader>
        </>
      );
    }
  
    return (
      <MainHeader>
        <MainLogo />
        <MainMenu>    
          <Button href="/signup" type="primary">Sign Up</Button>
          <Button href="/login">Login</Button>
        </MainMenu>
      </MainHeader>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userInterests: state.userInterests
  }
};


export default connect(mapStateToProps, { removeAuthToken, showInterestsModal })(AppHeader);
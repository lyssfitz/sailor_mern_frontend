import React, { Component } from "react";
import { fetchCurrentUser } from "./../../actions";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import { connect } from "react-redux";
import LocalAPI from "./../../apis/local";
import styled from "styled-components"
import LoadingPage from "./LoadingPage";

const NotificationContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: auto;
`;

const NotificationBoxes = styled.div`
  display: grid;
  grid-gap: 20px;

`;

const NotificationBox = styled.div`
  display: grid;
  color: #000;
  font-size: 1.1em;
  grid-template-columns: 1fr 10fr;
  border-bottom: 1px solid #EEE;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const Notification = styled.div``;

const IconBox = styled.div`

`;


const Header = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  border-bottom: 7px solid #EEE;
  width: max-content;
`;

class NotificationsPage extends Component {
  state = {
    notifications: []
  }


  
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }

    this.fetchNotifications();
  }

  fetchNotifications = () => {

    LocalAPI.get(`/user/notifications`)
      .then(response => {
        this.setState({ notifications: response.data })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { user } = this.props;
    const { notifications } = this.state;
    if (user && notifications) {
      return (
        <NotificationContainer>
        <Header>Notifications</Header>
        <NotificationBoxes>
        {notifications.map(notification => {
          return (
            <NotificationBox key={notification.notificationId}>
              <IconBox>
                <Icon type="notification" />
              </IconBox>
              <Notification>
                {notification.firstName.charAt(0).toUpperCase() + notification.firstName.slice(1)} {notification.lastName.charAt(0).toUpperCase() + notification.lastName.slice(1)} mentioned you in the post <Link to={notification.url}>{notification.articleTitle}</Link>
              </Notification>
            </NotificationBox>
          );
        })}
        </NotificationBoxes>
        </NotificationContainer> 
      );
    }

    return (
      <LoadingPage />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // token: state.auth.token,
    user: state.user.user,
  //   userInterests: state.userInterests,
  //   articles: state.articles
  }
}

export default connect(mapStateToProps, { fetchCurrentUser })(NotificationsPage);
import React, { Component } from "react";
import { fetchCurrentUser } from "./../../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LocalAPI from "./../../apis/local";
import styled from "styled-components"
import LoadingPage from "./LoadingPage";

const NotificationContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`;

const NotificationBox = styled.div`
  display: grid;
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
        <h1>Notifications</h1>
        <div>
        {notifications.map(notification => {
          return (
            <NotificationBox key={notification.notificationId}>
              {notification.firstName.charAt(0).toUpperCase() + notification.firstName.slice(1)} {notification.lastName.charAt(0).toUpperCase() + notification.lastName.slice(1)} mentioned you in the post <Link to={notification.url}>{notification.articleTitle}</Link>
            </NotificationBox>
          );
        })}
        </div>
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
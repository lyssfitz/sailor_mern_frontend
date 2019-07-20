import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InterestsModal from "./InterestsModal"
import ArticleForm from "./../forms/ArticleForm"
import { showArticleModal, showInterestsModal, fetchArticles, fetchCurrentUser } from "./../../actions"
import { Button } from "antd";
// import RegularFeed from "./RegularFeed"
import CuratedFeed from "./CuratedFeed"


const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;


class FeedPage extends Component {
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }
    this.props.fetchArticles();
  }

  render() {
    const { user, showArticleModal } = this.props;

    // if (userInterests !== null && userInterests.length === 0) {
    //   this.props.showInterestsModal();
    // }

    return (
      <>
        <InterestsModal />
        <ArticleForm />
        <FeedHeader>
          <h1>Feed</h1>
          {user && user.admin && <Button type="primary" onClick={showArticleModal}>
            Add an Article
          </Button>}
        </FeedHeader>
        <CuratedFeed />
      </>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.user.user,
    userInterests: state.userInterests,
    articles: state.articles
  }
}

export default connect(mapStateToProps, { showArticleModal, showInterestsModal, fetchArticles, fetchCurrentUser })(FeedPage);
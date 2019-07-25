import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InterestsModal from "./InterestsModal"
import ArticleForm from "./../forms/ArticleForm"
import { showArticleModal, fetchArticles, fetchCurrentUser } from "./../../actions"
import { Button } from "antd";
// import RegularFeed from "./RegularFeed"
import CuratedFeed from "./CuratedFeed"


const FeedHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 0 30px 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

const FeedTitle = styled.h1`
  font-size: 3em;
  text-align: center;
  margin: auto;
  align-self: center;
  letter-spacing: -1px;
  border-bottom: 7px solid #EEE;
  width: max-content;

  @media (min-width: 768px) {
    margin: 0;
    font-size: 4em;
    grid-column: 2;
    align-self: center;
  }
`;

const ArticleButton = styled(Button)`
  width: max-content; 
  justify-self: center;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-column: 3;
    justify-self: end;
    align-self: start;
  }
`;

class FeedPage extends Component {
  // Fetch current user on mount, and all the articles stored in database
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }
    this.props.fetchArticles();
  }

  render() {
    const { user, showArticleModal } = this.props;

    return (
      <>
        <InterestsModal />
        <ArticleForm />
        <FeedHeader>
          <FeedTitle>
            My Feed
          </FeedTitle>
          {user && user.admin && <ArticleButton type="primary" onClick={showArticleModal}>
            Add an Article
          </ArticleButton>}
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

export default connect(mapStateToProps, { showArticleModal, fetchArticles, fetchCurrentUser })(FeedPage);
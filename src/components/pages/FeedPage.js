import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InterestsModal from "./InterestsModal"
import ArticleForm from "./../forms/ArticleForm"
import { showArticleModal, showInterestsModal, fetchArticles, fetchCurrentUser } from "./../../actions"
import { Button } from "antd";
import ArticleCard from "./ArticleCard"
import LoadingPage from "./LoadingPage"


const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;

class FeedPage extends Component {
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;
    // hide interests modal during development

    if (token) {
      fetchCurrentUser();
    }
    this.props.fetchArticles();

  }

  render() {
    const { user, articles, showArticleModal, userInterests } = this.props;

    if (articles) {
      if (userInterests !== null && userInterests.length === 0) {
        this.props.showInterestsModal();
      }
      return (
        <>
          {/* Hide Interests Modal during development */}
          <InterestsModal />
          <ArticleForm />
          <FeedHeader>
            <h1>Feed</h1>
            {user && user.admin && <Button type="primary" onClick={showArticleModal}>
              Add an Article
            </Button>}
          </FeedHeader>
          <FeedContainer>
            {articles.map((article, index) => {
              return (
                <ArticleCard 
                  date={article.date_posted}
                  title={article.metadata.title}
                  author={article.metadata.author}
                  source={article.metadata.source}
                  image={article.metadata.image}
                  id={article._id}
                  key={article._id}
                />
              );
            })}
          </FeedContainer>
        </>
      );
    }


    return (
      <LoadingPage />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
    token: state.auth.token,
    user: state.user.user,
    userInterests: state.userInterests
  }
}

export default connect(mapStateToProps, { showArticleModal, showInterestsModal, fetchArticles, fetchCurrentUser })(FeedPage);
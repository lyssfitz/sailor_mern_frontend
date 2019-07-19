import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import InterestsModal from "./InterestsModal"
import ArticleForm from "./../forms/ArticleForm"
import { showArticleModal, showInterestsModal, fetchArticles } from "./../../actions"
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
    // hide interests modal during development
    // this.props.showInterestsModal();
    this.props.fetchArticles();
  }

  render() {
    const { user, articles, showArticleModal } = this.props;
    console.log(user);
    if (articles) {
      return (
        <>
          {/* Hide Interests Modal during development */}
          {/* <InterestsModal /> */}
          <ArticleForm />
          <FeedHeader>
            <h1>Feed</h1>
            {<Button type="primary" onClick={showArticleModal}>
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
    user: state.user.user
  }
}

export default connect(mapStateToProps, { showArticleModal, showInterestsModal, fetchArticles })(FeedPage);
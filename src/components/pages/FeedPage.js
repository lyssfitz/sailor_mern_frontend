import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import InterestsModal from "./InterestsModal"
import { showModal, fetchArticles } from "./../../actions"
import ArticleCard from "./ArticleCard"
import LoadingPage from "./LoadingPage"


const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
`;

class FeedPage extends Component {
  componentDidMount = () => {
    // hide interests modal during development
    // this.props.showModal();
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    console.log(articles); 

    if (articles) {
      console.log(articles);
      return (
        <>
          {/* Hide Interests Modal during development */}
          {/* <InterestsModal /> */}
          <h1>Feed</h1>
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
    articles: state.articles.articles
  }
}

export default connect(mapStateToProps, { showModal, fetchArticles })(FeedPage);
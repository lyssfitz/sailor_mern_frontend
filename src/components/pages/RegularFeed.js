import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ArticleCard from "./ArticleCard"
import LoadingPage from "./LoadingPage"


const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
`;


class RegularFeed extends Component {
  render() {
    const { articles } = this.props;
    const { articles: allArticles } = articles;

      if (allArticles) {
        return (
          <FeedContainer>
            {allArticles.map((article, index) => {
              return (
                <ArticleCard 
                  date={article.date_posted}
                  title={article.metadata.title}
                  author={article.metadata.author}
                  source={article.metadata.source}
                  image={article.metadata.image}
                  id={article._id}
                  key={article._id}
                  interests={article.interests}
                />
              );
            })}
          </FeedContainer>
        );
      }

    return (
      <LoadingPage />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, null)(RegularFeed);
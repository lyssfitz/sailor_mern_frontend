import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ArticleCard from "./ArticleCard"
import CuratedGridLeft from "./CuratedGridLeft"
import CuratedGridRight from "./CuratedGridRight"
import RegularFeed from "./RegularFeed"


const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;
// Component rendered in Feed when user has selected one or more interest
class CuratedFeed extends Component {
  render() {
    const { articles } = this.props;
    const { curatedArticles } = articles;

    if (curatedArticles) {
      const { tag0, tag1, tag2, remainingArticles } = curatedArticles;
        return (
          <>
          <CuratedGridLeft tag={tag0} />
          <CuratedGridRight tag={tag1} />
          <CuratedGridLeft tag={tag2} />

          <FeedContainer>
            {remainingArticles && remainingArticles.map((article, index) => {
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
                  url={article.metadata.url}
                  likes={article.likes.length}
                  comments={article.comments.length}
                />
              );
            })}
          </FeedContainer>
          </>
        );
      }

    return (
      <RegularFeed />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, null)(CuratedFeed);
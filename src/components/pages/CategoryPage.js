import React, { Component } from "react";
// import LocalAPI from "./../../apis/local"
import styled from "styled-components";
import { connect } from "react-redux";
import { getArticlesByInterest } from "./../../actions"
import ArticleCard from "./ArticleCard"
import LoadingPage from "./LoadingPage"

const CategoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
`;

const CategoryTitle = styled.h1`
  font-size: 2em;
  margin: 0 auto;
  align-self: center;
  border-bottom: 7px solid #EEE;
  width: max-content;

  @media (min-width: 768px) {
    font-size: 4em;
    margin: 0;
  }
`;

class CategoryPage extends Component {
  componentDidMount() {
    const { interest } = this.props.match.params;
    this.props.getArticlesByInterest(interest);
  }

  render() {
    const { interest } = this.props.match.params;
    let interestTag = interest.replace("-", " ");
    const { selectedArticles } = this.props;

    if (selectedArticles) {
      return (
        <CategoryContainer>
          <CategoryTitle>{interestTag}</CategoryTitle>
          {selectedArticles.map(article => {
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
              />
            );
          })}
        </CategoryContainer>
      );
    }

    return (
      <LoadingPage />
    );

  }
}

const mapStateToProps = (state) => {
  return {
    selectedArticles: state.categoryArticles.selectedArticles
  }
}


export default connect(mapStateToProps, { getArticlesByInterest })(CategoryPage);
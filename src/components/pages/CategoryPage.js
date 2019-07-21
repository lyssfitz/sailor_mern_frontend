import React, { Component } from "react";
import LocalAPI from "./../../apis/local"
import styled from "styled-components";
import ArticleCard from "./ArticleCard"

const CategoryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 40px;
`;

const CategoryTitle = styled.h1`
  font-size: 4em;
  text-align: center;
  align-self: center;
`;

class CategoryPage extends Component {
  state = {
    articles: null
  }

  componentDidMount() {
    const { interest } = this.props.match.params;
    this.getArticlesByInterest(interest);
  }

  // componentDidUpdate() {
  //   const { interest } = this.props.match.params;
  //   this.getArticlesByInterest(interest);
  // }

  getArticlesByInterest = (interest) => {
    LocalAPI.get(`/feed/${interest}`)
      .then(response => {
        this.setState({
          articles: response.data.selectedArticles
        })
      })
      .catch(error => console.log(error));
  }


  render() {
    const { interest } = this.props.match.params;
    let interestTag = interest.replace("-", " ");
    const { articles } = this.state;
    console.log(articles);
    if (articles) {
      return (
        <CategoryContainer>
          <CategoryTitle>{interestTag}</CategoryTitle>
          {articles.map(article => {
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
        </CategoryContainer>
      );
    }

    return (
      <div>
        No articles found.
      </div>
    );

  }
}

export default CategoryPage;
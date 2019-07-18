import React, { Component } from "react";
import LocalAPI from "./../../apis/local";
import styled from "styled-components";
import LoadingPage from "./LoadingPage"
import LikeButton from "./LikeButton";
import ReactHtmlParser from 'react-html-parser';

const Article = styled.article`
  max-width: 600px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-size: 3em;
  font-family: 'DM Serif Text', serif;
  line-height: 1.2em;
`;

const ArticleAuthor = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  font-weight: 700;
`;

const ArticleSource = styled.h2`
  font-size: 1em;
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 600;
`;

const ArticleBody = styled.div`
  font-size: 1.2em;
  color: #333;
  line-height: 2em;
  img {
    max-width: 100%;
    height: auto;
    margin: 30px auto;
    display: block;
  }
  iframe {
    width: 100%;
  }
`;

class ArticlePage extends Component {
  state = {
    article: null
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.fetchArticle(id);
  }

  fetchArticle = (id) => {
    LocalAPI.get(`/article/${id}`)
      .then(response => {
        this.setState({ article: response.data.article });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { id } = this.props.match.params;
    const { article } = this.state;

    if (article) {
      return (
        <>
          <Article>
            <ArticleTitle>{article.metadata.title}</ArticleTitle>
            <ArticleAuthor>{article.metadata.author}</ArticleAuthor>
            <ArticleSource>{article.date_posted}, {article.metadata.source}</ArticleSource>
            <LikeButton 
              articleId={id}
            />
            <ArticleBody>
              {ReactHtmlParser(article.article_body)}
            </ArticleBody>
          </Article>
        </>
      );
    }

    return (
      <LoadingPage />
    );
  }
}

export default ArticlePage;
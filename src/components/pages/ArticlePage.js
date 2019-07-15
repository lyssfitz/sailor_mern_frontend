import React, { Component } from "react";
import LocalAPI from "./../../apis/local";
import styled from "styled-components";
import { Icon } from "antd";

const Loading = styled(Icon)`
  font-size: 3em;
`;

const LoadingPage = styled.div`
  text-align: center;
`;

const Article = styled.article`
  max-width: 600px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-size: 3em;
  font-family: 'DM Serif Text', serif;
  line-height: 1.2em;
`;

const ArticleImage = styled.img`
  width: 100%;
  padding: 40px 0;
`;

const ArticleAuthor = styled.h2`
  font-size: 1.2em;
  margin: 0;
`;

const ArticleSource = styled.h2`
  font-size: 1em;
  margin: 0;
  text-transform: uppercase;
`;

const ArticleBody = styled.div`
  font-size: 1.2em;
  color: #333;
  line-height: 2em;
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
        this.setState({ article: response.data });
        console.log(response.data)
      })
      .catch(error => console.log(error));
  }


  render() {
    const { article } = this.state;

    if (article) {
      return (
        <>
          <Article>
            <ArticleTitle>{article.metadata.title}</ArticleTitle>
            <ArticleAuthor>By {article.metadata.author}</ArticleAuthor>
            <ArticleSource>{article.date_posted}, {article.metadata.source}</ArticleSource>
            <ArticleImage src={article.metadata.image} />
            <ArticleBody>
              {article.article_body}
            </ArticleBody>
          </Article>
        </>
      );
    }

    return (
      <LoadingPage>
        <Loading type="loading" />
      </LoadingPage>
    );
  }
}

export default ArticlePage;
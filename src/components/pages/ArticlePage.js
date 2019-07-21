import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag } from "antd";
import LocalAPI from "./../../apis/local";
import styled from "styled-components";
import LoadingPage from "./LoadingPage"
import LikeButton from "./LikeButton";
import ReactHtmlParser from 'react-html-parser';
import moment from "moment";

const Article = styled.article`
  max-width: 600px;
  margin: 0 auto;
`;

const ArticleTitle = styled.h1`
  font-size: 3em;
  // font-family: 'DM Serif Text', serif;
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

const Tags = styled.div`
  line-height: 2.5em;
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;


class ArticlePage extends Component {
  state = {
    article: null,
    likes: 0,
    liked: null
  }


  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.fetchArticle(id);
  }

  componentDidUpdate = () => {
    const { user } = this.props;
    const { article, liked } = this.state;

    if (user && article && liked === null ) {
      this.setState((state) => {
        return { liked: state.article.likes.includes(user._id) }
      });
    }
  }

  fetchArticle = (id) => {

    LocalAPI.get(`/article/${id}`)
      .then(response => {
        this.setState({
          article: response.data.article,
          likes: response.data.article.likes.length,
        });
      })
      .catch(error => console.log(error));
  }

  onLikeButtonClick = () => {
    const { user } = this.props;
    const { id } = this.props.match.params;
    LocalAPI.post(`/article/${id}/likes`, { user })
      .then(response => {
        this.setState({
          liked: response.data.like,
          likes: response.data.likesCount,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  

  render() {
    const { article, likes, liked } = this.state;

    if (article) {

      return (
        <>
          <Article>
            <ArticleTitle>{article.metadata.title}</ArticleTitle>
            <ArticleAuthor>{article.metadata.author}</ArticleAuthor>
            <ArticleSource>{moment(article.date_posted).format("h:mm a dddd Do MMM 'YY")} | {article.metadata.source}</ArticleSource>
            <LikeButton 
              like={this.onLikeButtonClick}
              liked={liked}
              likes={likes}
            />
            <Tags>
              {article.interests.map((tag) => {
                return (<InterestTag key={tag}>{tag}</InterestTag>);
              })}
            </Tags>
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps, null)(ArticlePage);
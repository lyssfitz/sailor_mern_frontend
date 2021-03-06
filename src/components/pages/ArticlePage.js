import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon, Tag, Button } from "antd";
import LocalAPI from "./../../apis/local";
import styled from "styled-components";
import LoadingPage from "./LoadingPage"
import LikeButton from "./LikeButton";
import ReactHtmlParser from 'react-html-parser';
import { Linkedin } from "react-social-sharing";
import { EmailShareButton } from "react-share";
import moment from "moment";
import ScrollToTopOnMount from "./../ScrollToTopOnMount"

import UserCommentsSection from "./../UserCommentsSection/UserCommentsSection"

const Article = styled.article`
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 10fr;
  }
`;

const ArticleHeader = styled.div`
  grid-row: 1 / span 2;

  @media (min-width: 768px) {
    grid-column: 2 / span 1;
  }
`;

const ArticleButtons = styled.div`
  grid-row: 3 / span 1;
  text-align: center;

  > * {
    margin: 5px;
  }

  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
    text-align: right;
  }
`;

const ArticleTitle = styled.h1`
  font-size: 2.5em;
  line-height: 1em;

  @media (min-width: 768px) {
    font-size: 3.8em;
    line-height: 1em;
  }
`;

const ArticleAuthor = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.7em;
  }
`;

const ArticleDate = styled.h2`
  font-size: 1em;
  margin: 10px 0;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const ArticleSource = styled.h2`
  font-size: 1em;
  margin: 10px 0;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #CCC;
  text-align: right;

  a {
    color: #22C458;
  }

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;

const ArticleBody = styled.div`
  font-size: 1.2em;
  color: #333;
  line-height: 2em;
  img {
    max-width: 100%;
    height: auto;
    margin: 0 auto 20px auto;
    display: block;
  }
  iframe {
    width: 100%;
  }

  grid-row: 4 / span 1;

  @media (min-width: 768px) {
    grid-column: 2 / span 1;
    grid-row: 3 / span 1;
  }

`;

const ArticleComments = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / span 1;
    grid-row: 4 / span 1;
  }
`;
const Separator = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 40%;
    border-top: 5px solid #000;
    margin-left: auto;
  }

`;

const Tags = styled.div`
  margin-top: 10px;
  text-align: center;
`;

const InterestTag = styled(Tag)`
`;

// Component for rendering individual articles
class ArticlePage extends Component {
  state = {
    article: null,
    likes: 0,
    liked: null
  }

  // Fetch article on mount
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.fetchArticle(id);
  }
  // Set liked status - whether the current user has liked the article
  componentDidUpdate = () => {
    const { user } = this.props;
    const { article, liked } = this.state;

    if (user && article && liked === null ) {
      this.setState((state) => {
        return { liked: state.article.likes.includes(user._id) }
      });
    }
  }
  // Method for retrieving article from database
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
  // Method for liking the article. This sends the current user information to backend, which stores the user ID in the array of likes that an article has
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
          <ScrollToTopOnMount />
          <Article>
            <ArticleHeader>
              <ArticleSource><a href={article.metadata.url} target="_blank" rel="noopener noreferrer">Source: {article.metadata.source} <Icon type="link" /></a></ArticleSource>
              <ArticleTitle>{article.metadata.title}</ArticleTitle>
              {article.metadata.author && <ArticleAuthor><Icon style={{ color: "#CCC", padding: "0 3px" }} type="line" /> {article.metadata.author} <Icon style={{ color: "#CCC", padding: "0 3px" }} type="line" /></ArticleAuthor>}
              <ArticleDate>{moment(article.date_posted).format("h:mma dddd Do MMM 'YY")}</ArticleDate>
              <Tags>
                {article.interests.length !== 0 && <Icon style={{ color: "#CCC", margin: "5px" }} type="tag" />}
                {article.interests.map((tag) => {
                  return (<InterestTag style={{margin: "0px 5px" }} key={tag}>{tag}</InterestTag>);
                })}
              </Tags>
            </ArticleHeader>
            <ArticleButtons>
              <EmailShareButton
                url={`${article.metadata.url}`}
                subject={`${article.metadata.title}`}
                openWindow={true}>
                  <Button
                    style={{ textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.5px" }}
                  >
                    <Icon
                      type="mail"
                    /> SHARE
                  </Button>
              </EmailShareButton>
              
              <Linkedin link={`${article.metadata.url}`} />

              <LikeButton 
                like={this.onLikeButtonClick}
                liked={liked}
                likes={likes}
              />
            </ArticleButtons>
            <Separator>
            </Separator>
            <ArticleBody>
              {ReactHtmlParser(article.article_body)}
            </ArticleBody>
            <ArticleComments>{article && <UserCommentsSection comments={article.comments} articleId={article._id}/>}</ArticleComments>
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
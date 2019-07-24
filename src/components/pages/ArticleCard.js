import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Tag } from "antd";
import moment from "moment";

const Article = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr max-content;
  border-bottom: 1px solid #EEE;
  padding: 0 0 0 0;
`;

const ArticleInfo = styled.div`
  grid-row: 2;
  padding-top: 10px;
`;

const ArticleFooter = styled.div`
  grid-row: 3;
  font-size: 1em;
  text-align: right;
  align-content: end;
`;

const ImgCover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 80px;
  opacity: 0;
  transition: .1s ease;
  background-color: transparent;
`;

const ArticleImgContainer = styled.div`
  background: #EEE;
  grid-row: 1;
  position: relative;

  &:hover ${ImgCover} {
    opacity: 1;
  }
`;

const ArticleImg = styled.img`
  height: 200px;
  width: 100%;
  display: block;
  object-fit: cover;
  background: #EEE;
  margin: 0;
  padding: 0;
  
`;

const ArticleTitle = styled.h2`
  font-size: 2em;
  line-height: 1.2em;
  letter-spacing: -0.5px;
  margin: 10px 0;
`;

const ArticleAuthor = styled.h3`
  font-size: 1em;
  // text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
`;

const ArticleDate = styled.h3`
  font-size: 1em;
  // text-transform: uppercase;
  font-weight: 400;
  display: inline-block;
`;


const ArticleSource = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
  color: #CCC;
  padding-top: 5px;

  a {
    color: #FFF;
  }
`;

const Tags = styled.div`
  line-height: 2.5em;
  color: #CCC;
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;

const LikesComments = styled.div`
  width: 46px;
  height: 46px;
  margin: 5px 5px 5px auto;
  padding: 12px 5px 12px 5px;
  border-radius: 50%;
  background: #22C458;
  text-align: center;
  font-size: 1em;
  align-content: center;

  > * {
    color: #FFF;

  }
`;



class ArticleCard extends Component {
  render() {

    return (
      <Article>
        <Link style={{ color: "#FFF" }} to={{ pathname: `/article/${this.props.id}` }}>
          <ArticleImgContainer>
            <ArticleImg src={this.props.image} />
            <ImgCover>
              <LikesComments>
                <Icon type="heart" /> {this.props.likes}
              </LikesComments>
                <LikesComments>
                <Icon type="message" /> {this.props.comments}
              </LikesComments>
            </ImgCover>
          </ArticleImgContainer>
        </Link>
          <ArticleInfo>
            <Link to={{ pathname: `/article/${this.props.id}` }}>
              <ArticleTitle>{this.props.title}</ArticleTitle>
              <ArticleAuthor>{this.props.author}</ArticleAuthor>{this.props.author && <Icon style={{ color: "#CCC", padding: "0 3px" }} type="line" />}<ArticleDate>{moment(this.props.date).format("ddd Do MMM, 'YY")}</ArticleDate>
            </Link>
            <Tags>
              {this.props.interests.length !== 0 && <Icon style={{ paddingRight: "5px" }} type="tag" />} {this.props.interests.map((tag) => {
                return (<InterestTag key={tag}>{tag}</InterestTag>);
              })}
            </Tags>
          </ArticleInfo>
        
        <ArticleFooter>
          {/* <Icon
            type="heart"
            theme={favourited && "filled"}
            onClick={this.onFavClick}
          /> */}
          <ArticleSource><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.source} <Icon type="link" /></a></ArticleSource>
        </ArticleFooter>
      </Article>
    );
  }
}

export default ArticleCard;
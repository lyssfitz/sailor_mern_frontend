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

const ArticleImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background: #EEE;
  margin: 0;
  padding: 0;
  grid-row: 1;
`;

const ArticleTitle = styled.h2`
  font-size: 2em;
  line-height: 1.2em;
  letter-spacing: -0.5px;
  margin: 10px 0;
  // font-family: 'DM Serif Text', serif;
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
    color: #22C458;
  }
`;

const Tags = styled.div`
  line-height: 2.5em;
  color: #CCC;
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;



class ArticleCard extends Component {
  render() {

    return (
      <Article>
        <Link to={{ pathname: `/article/${this.props.id}` }}>
          <ArticleImg src={this.props.image} />
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
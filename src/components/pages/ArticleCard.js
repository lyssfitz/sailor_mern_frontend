import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Tag } from "antd";

const Article = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr max-content;
  border-bottom: 1px solid #CCC;
  padding: 0 0 20px 0;
`;

const ArticleInfo = styled.div`
  grid-row: 2;
  padding-top: 10px;
`;

const ArticleButtons = styled.div`
  grid-row: 3;
  font-size: 1em;
  text-align: right;
  padding-bottom: 10px;
  color: #eb0e42;
  display: none;
`;

const ArticleImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  background: #CCC;
  margin: 0;
  padding: 0;
  grid-row: 1;
`;

const ArticleTitle = styled.h2`
  font-size: 1.4em;
  font-family: 'DM Serif Text', serif;
`;

const ArticleAuthor = styled.h3`
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
`;

const ArticleSource = styled.h3`
  font-size: 0.9em;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 600;
`;

const Tags = styled.div`
  line-height: 2.5em;
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;



class ArticleCard extends Component {
  // until user model has favourites, temporarily use 'local' state
  // where favourites are not stored on user
  state = {
    favourited: false
  }

  onFavClick = () => {
    const { favourited } = this.state;
    favourited ? this.setState({ favourited: false }) : this.setState({ favourited: true })
  }

  render() {
    const { favourited } = this.state;

    return (
      <Article>
        <Link to={{ pathname: `/article/${this.props.id}` }}>
          <ArticleImg src={this.props.image} />
        </Link>
          <ArticleInfo>
            <Link to={{ pathname: `/article/${this.props.id}` }}>
              <ArticleTitle>{this.props.title}</ArticleTitle>
              <ArticleAuthor>{this.props.author}</ArticleAuthor> | <ArticleSource>{this.props.source}</ArticleSource>
              <h5>{this.props.date}</h5>
            </Link>
            <Tags>
              {this.props.interests.map((tag) => {
                return (<InterestTag key={tag}>{tag}</InterestTag>);
              })}
            </Tags>
          </ArticleInfo>
        
        <ArticleButtons>
          <Icon
            type="heart"
            theme={favourited && "filled"}
            onClick={this.onFavClick}
          />
        </ArticleButtons>
      </Article>
    );
  }
}

export default ArticleCard;
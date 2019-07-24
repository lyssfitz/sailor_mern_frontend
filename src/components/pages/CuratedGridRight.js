import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux"
import ArticleCard from "./ArticleCard"

const CuratedGrid = styled.section`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: max-content max-content;
  }
`;

const InterestHeader = styled.h3`
  font-size: 2.8em;
  border-left: 0px;
  line-height: 1em;
  text-align: center;
  padding-left: 0;

  @media (min-width: 768px) {
    font-size: 3.8em;
    grid-column: 4 / span 1;
    grid-row: 1 / span 1;
    border-left: 1px solid #EEE;
    text-align: left;
    padding-left: 20px;
  }
`;

const Separator = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 15%;
    border-top: 5px solid #000;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

const MainArticle = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / span 3;
    grid-row: 1 / span 1;
  }
`;

const SubArticle1 = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
  }
`;

const SubArticle2 = styled.div`
  @media (min-width: 768px) {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
  }
`;


class CuratedGridRight extends Component {
  
  render() {
    const { tag } = this.props;

    if (tag && tag.articles.length > 0) {
      return (
        <CuratedGrid>
        <InterestHeader>
          <Separator></Separator>
          <span>{tag.tag}</span>
        </InterestHeader>
              <MainArticle>
                <ArticleCard 
                  date={tag.articles[0].date_posted}
                  title={tag.articles[0].metadata.title}
                  author={tag.articles[0].metadata.author}
                  source={tag.articles[0].metadata.source}
                  image={tag.articles[0].metadata.image}
                  id={tag.articles[0]._id}
                  key={tag.articles[0]._id}
                  interests={tag.articles[0].interests}
                  url={tag.articles[0].metadata.url}
                  likes={tag.articles[0].likes.length}
                  comments={tag.articles[0].comments.length}
                />
              </MainArticle>
              <SubArticle1>
                <ArticleCard 
                  date={tag.articles[1].date_posted}
                  title={tag.articles[1].metadata.title}
                  author={tag.articles[1].metadata.author}
                  source={tag.articles[1].metadata.source}
                  image={tag.articles[1].metadata.image}
                  id={tag.articles[1]._id}
                  key={tag.articles[1]._id}
                  interests={tag.articles[1].interests}
                  url={tag.articles[1].metadata.url}
                  likes={tag.articles[1].likes.length}
                  comments={tag.articles[1].comments.length}
                />
              </SubArticle1>
              <SubArticle2>
                <ArticleCard 
                  date={tag.articles[2].date_posted}
                  title={tag.articles[2].metadata.title}
                  author={tag.articles[2].metadata.author}
                  source={tag.articles[2].metadata.source}
                  image={tag.articles[2].metadata.image}
                  id={tag.articles[2]._id}
                  key={tag.articles[2]._id}
                  interests={tag.articles[2].interests}
                  url={tag.articles[2].metadata.url}
                  likes={tag.articles[2].likes.length}
                  comments={tag.articles[2].comments.length}
                />
              </SubArticle2>  
        </CuratedGrid>
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, null)(CuratedGridRight);
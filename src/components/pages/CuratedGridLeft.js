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
  font-size: 4em;
  border-right: 0px;
  line-height: 1em;
  padding-right: 20px;
  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    border-right: 1px solid #ccc;
  }
`;

const MainArticle = styled.div`
  @media (min-width: 768px) {
    grid-column: 2 / span 3;
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


class CuratedGridLeft extends Component {
  
  render(props) {
    const { tag } = this.props;

    if (tag && tag.articles.length > 0) {
      return (
        <CuratedGrid>
        <InterestHeader>
          {tag.tag}
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

export default connect(mapStateToProps, null)(CuratedGridLeft);
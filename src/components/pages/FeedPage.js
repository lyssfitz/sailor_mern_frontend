import React, { Component } from "react";
import { connect } from "react-redux";
// import InterestsModal from "./InterestsModal"
import { showModal, fetchArticles } from "./../../actions"

class FeedPage extends Component {
  componentDidMount = () => {
    // this.props.showModal();
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;
    // console.log(articles);
    console.log(this.props);
    return (
      <>
        {/* Hide Interests Modal during development */}
        {/* <InterestsModal /> */}
        <h1>Feed</h1>
        <ul>
          {articles.map((article, index) => {
            return (
              <li key={article.metadata.title}>{article.date_posted}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps, { showModal, fetchArticles })(FeedPage);
import React, { Component } from "react";
import LocalAPI from "./../../apis/local"
import LoadingPage from "./LoadingPage"


class CategoryPage extends Component {
  state = {
    articles: null
  }

  componentDidMount() {
    const { interest } = this.props.match.params;
    this.getArticlesByInterest(interest);
  }

  getArticlesByInterest = (interest) => {
    LocalAPI.get(`/feed/${interest}`)
      .then(response => {
        this.setState({
          articles: response.data.selectedArticles
        })
      })
      .catch(error => console.log(error));
  }


  render() {
    const { interest } = this.props.match.params;
    let interestTag = interest.replace("-", " ");
    const { articles } = this.state;

    if (articles) {
      return (
        <>
          <h1>{interestTag}</h1>
          {articles.map(article => {
            return (
              <div key={article._id}>
                {article.metadata.title}
              </div>
            );
          })}
        </>
      );
    }

    return (
      <LoadingPage />
    );

  }
}

export default CategoryPage;
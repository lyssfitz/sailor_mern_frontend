import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LocalAPI from "./../../apis/local";
import { showArticleModal, fetchArticles, fetchCurrentUser } from "./../../actions";

class ProfilePage extends Component {
  state = {
    likes: [],
    
  }

  componentDidMount = () => {
    // const { id } = this.props.match.params;
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }

    this.fetchLikes();
  }

  // componentDidUpdate = () => {
  //   const { user } = this.props;
  //   const { article, liked } = this.state;
  //   console.log(this.props);
  //   if (user && article && liked === null ) {
  //     this.setState((state) => {
  //       console.log(user);
  //       console.log("***")
  //       return { liked: state.article.likes.includes(user._id) }
  //     });
  //   }
  // }

  fetchLikes = () => {
    LocalAPI.get(`/user/profile`)
      .then(response => {
        this.setState({ likes: response.data.likes })
      })
      .catch(error => console.log(error));
  }

  render() {
    const { likes } = this.state;
    const { user, showArticleModal } = this.props;
    console.log(user);

    return(
      <>
      <h1>Profile Page</h1>
        <ul>
          {likes.map(article => {
            return (
              <li
                key={article._id}
              >
                {article.metadata.title}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
      user: state.user.user,
      userInterests: state.userInterests,
      articles: state.articles
    }
  }
  
export default connect(mapStateToProps, { showArticleModal, fetchArticles, fetchCurrentUser })(ProfilePage);
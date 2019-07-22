import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LocalAPI from "./../../apis/local";
import { fetchCurrentUser } from "./../../actions";
import LoadingPage from "./LoadingPage";
import ArticleCard from "./ArticleCard"
import { Tag } from "antd";

const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;

const Tags = styled.div`
  line-height: 2.5em;
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;

class ProfilePage extends Component {
  state = {
    likes: [],
    
  }

  componentDidMount = () => {
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
    const { user } = this.props;
    console.log(user);
    
    if (user) {
        return(
            <>
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <Tags>
              {user.interests.map((tag) => {
                return (<InterestTag key={tag}>{tag}</InterestTag>);
              })}
            </Tags>
            <FeedContainer>
              <ul>
                {likes.map(article => {
                  return (
                    <ArticleCard 
                  date={article.date_posted}
                  title={article.metadata.title}
                  author={article.metadata.author}
                  source={article.metadata.source}
                  image={article.metadata.image}
                  id={article._id}
                  key={article._id}
                  interests={article.interests}
                />
                  );
                })}
              </ul>
            </FeedContainer>
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
      token: state.auth.token,
      user: state.user.user,
    //   userInterests: state.userInterests,
    //   articles: state.articles
    }
  }
  
export default connect(mapStateToProps, { fetchCurrentUser })(ProfilePage);
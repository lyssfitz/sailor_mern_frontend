import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LocalAPI from "./../../apis/local";
import { fetchCurrentUser } from "./../../actions";
import LoadingPage from "./LoadingPage";
import ArticleCard from "./ArticleCard"
import { Tag } from "antd";
import Avatar from 'react-avatar';
import ScrollToTopOnMount from "./../ScrollToTopOnMount"


const ProfileContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
`;

const UserInfo = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr;

    @media (min-width: 550px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: max-content max-content;
    }
`;

const LeftSection = styled.div`
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    margin: 0 auto;

    @media (min-width: 550px) {
        grid-column: 1 / span 3;
        grid-row: 1 / span 1;
        padding-right: 20px;
        margin: 0 auto 0 0;
    }
`;

const RightSection = styled.div`
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    margin: auto;

    @media (min-width: 550px) {
        grid-column: 4 / span 1;
        grid-row: 1 / span 1;
        margin-left: auto;
    }
`;

const UserName = styled.h1`
  font-size: 3em;
  line-height: 1.2em;
  border-bottom: 7px solid #EEE;
  padding-bottom: 5px;
  width: max-content;
  margin: 0 auto 10px auto;
  @media (min-width: 550px) {
    margin: 0 auto 10px 0;
  }
`;

const Tags = styled.div`
  line-height: 2.5em;
  text-align: center;
  @media (min-width: 550px) {
    text-align: left;
  }
`;

const InterestTag = styled(Tag)`
  // margin: 5px auto;
`;

const LikeTitle = styled.h3`
    font-size: 2em;
    border-bottom: 1px solid #CCC;
    padding-top: 1em;

    // @media (min-width: 768px) {
    //     grid-column: 1 / span 4;
    //     grid-row: 2 / span 1;
    //     padding-right: 20px;
    // }
`;

const LikeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
`;


class ProfilePage extends Component {
  state = {
    likes: [],
    
  }
  // Fetch current user and likes on mount
  componentDidMount = () => {
    const { fetchCurrentUser, token } = this.props;

    if (token) {
      fetchCurrentUser();
    }

    this.fetchLikes();
  }

  // Method for making HTTP request to get likes associated with users
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


    if (user) {
        return(
          <>
          <ScrollToTopOnMount />
            <ProfileContainer>
                <UserInfo>
                    <LeftSection>
                        <UserName>{`${user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)} ${user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}`}</UserName>
                        <Tags>
                            {user.interests.map((tag) => {
                                return (<InterestTag key={tag}>{tag}</InterestTag>);
                            })}
                        </Tags>
                    </LeftSection>
                    <RightSection>
                        {user.avatar ? (
                            <Avatar src={`${user.avatar}`} size="150" round={true} />
                        ) : (
                            <Avatar name={`${user.firstName} ${user.lastName}`} round={true} color={'#CCC'} size="150" />
                        )}
                    </RightSection>
                </UserInfo>
            <LikeTitle>Likes</LikeTitle>
            <LikeContainer>
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
                      url={article.metadata.url}
                      likes={article.likes.length}
                      comments={article.comments.length}
                    />
                  );
                })}
            </LikeContainer>
            </ProfileContainer>
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
    }
  }
  
export default connect(mapStateToProps, { fetchCurrentUser })(ProfilePage);
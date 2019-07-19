import React, { Component } from "react";
import LocalAPI from "./../../apis/local"

class ProfilePage extends Component {
  state = {
    likes: [],
    
  }

  componentDidMount = () => {
    // const { id } = this.props.match.params;
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

export default ProfilePage;
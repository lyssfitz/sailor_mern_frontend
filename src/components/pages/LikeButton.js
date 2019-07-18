import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "antd";
import LocalAPI from "../../apis/local";

class LikeButton extends Component {
  state = {
    liked: false
  }

  onLikeButtonClick = () => {
    const { articleId, user } = this.props;
    LocalAPI.post(`/article/${articleId}/likes`, { user })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { liked } = this.state;
    return (
      <Button
        onClick={this.onLikeButtonClick}
      >
        <Icon
          type="heart"
          theme={liked && "filled"}
        />
        Like
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, null)(LikeButton);
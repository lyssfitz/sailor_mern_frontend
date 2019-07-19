import React, { Component } from "react";
import { Button, Icon } from "antd";

class LikeButton extends Component {


  render() {
    const { like, liked, likes } = this.props;
    return (
      <Button
        onClick={like}
      >
        <Icon
          type="heart"
          theme={liked && "filled"}
        />
        {likes} Like
      </Button>
    );
  }
}

export default LikeButton
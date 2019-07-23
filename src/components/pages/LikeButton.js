import React, { Component } from "react";
import { Button, Icon } from "antd";

class LikeButton extends Component {


  render() {
    const { like, liked, likes } = this.props;

    return (
      <Button
        onClick={like}
        style={{ textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.5px" }}
      >
        <Icon
          type="heart"
          theme={liked && "filled"}
        />
        {likes ? `${likes}` : null }
      </Button>
    );
  }
}

export default LikeButton
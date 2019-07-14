import React, { Component } from "react";
import { Mentions } from 'antd';

const { Option } = Mentions;

class UserComment extends Component {
  render() {
    const {comment} = this.props;

    return (
      <Mentions
        style={{ width: '100%' }}
        value={comment}
      >
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </Mentions>
    );
  }
}

export default UserComment;

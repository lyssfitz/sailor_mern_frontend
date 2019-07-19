import React, { Component } from "react";
import { Comment, Tooltip } from 'antd';
import moment from 'moment';

class UserComment extends Component {
  render() {
    return (
      <Comment
        author={<h4>Han Solo</h4>}
        content={
          <p>
            That was an excellent article!
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}
export default UserComment;
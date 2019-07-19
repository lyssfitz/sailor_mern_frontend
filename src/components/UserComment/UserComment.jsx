import React, { Component } from "react";
import { Comment, Tooltip } from 'antd';
import moment from 'moment';

const authorName = "Mary Smith";
const content = "That was an excellent article!";
const dateTime = moment();

class UserComment extends Component {
  render() {
    return (
      <Comment
        author={<h4>{authorName}</h4>}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format('YYYY-MM-DD HH:mm:ss')}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}
export default UserComment;
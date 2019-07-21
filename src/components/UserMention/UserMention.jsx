import React, { Component } from "react";
import { Mentions, Form, Button } from 'antd';

const { Option } = Mentions;

class UserMention extends Component {
  render() {
    const {comment, users} = this.props;

    return (
      <>
        <h4>What do you think about the article? Comment below...</h4>
        {/* {users && users.map(user => <h5>{user}</h5>)} */}
        <Form layout="horizontal">
        <Mentions
          style={{ width: '100%' }}
          value={comment}
        >
          {users && users.map(user => <Option value={user}></Option>)}
        </Mentions>
        <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>Reset</Button>
        </Form.Item>
        </Form>
      </>
    );
  }
}

export default UserMention;

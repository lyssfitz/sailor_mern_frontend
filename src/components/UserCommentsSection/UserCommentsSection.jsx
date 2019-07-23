import React, { Component } from "react";
import LocalAPI from './../../apis/local';
import { connect } from "react-redux";

// Custom components
import UserCommentList from '../UserCommentList/UserCommentList';
import UserCommentEditor from '../UserCommentEditor/UserCommentEditor';

class UserCommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      submitting: false,
      value: '',
    }
  }

  handleSubmit = async() => {
    // console.log(this.props.user)
    const { user } = this.props
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });
    const body = this.state.value
    const user_metadata = {commentor_id: user._id, firstName: user.firstName, lastName: user.lastName}
    const mention = {mentionee_id: "5d2d6050ec1b07710c0efa84"}
    const response = await LocalAPI.post(`/article/${this.props.articleId}/comment_create`, {body, user_metadata, mention})
    console.log(response);
    this.setState({
      submitting: false, 
      comments: response.data
    })

  };

  handleChange = value => {
    this.setState({
      value: value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    console.log(this.state);
    return (
      <div>
        {comments.length > 0 && <UserCommentList userComments={comments}/>}
        <UserCommentEditor
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          submitting={submitting}
          userList={this.props.userList}
          value={value}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps, null)(UserCommentsSection);

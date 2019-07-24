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

  handleSubmit = async(tagged) => {

    const { user } = this.props

    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });
    const body = this.state.value
    const user_metadata = {commentor_id: user._id, firstName: user.firstName, lastName: user.lastName}
    const mentions = {taggedUsers: tagged}
    const date_posted = Date.now();
    const response = await LocalAPI.post(`/article/${this.props.articleId}/comment_create`, {body, user_metadata, date_posted, mentions})
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
    const { user } = this.props;
    return (
      <div>
        {comments.length > 0 && <UserCommentList userComments={comments}/>}
        <UserCommentEditor
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          submitting={submitting}
          userList={this.props.userList}
          value={value}
          articleId={this.props.articleId}
          user={user}
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

import React, { Component } from "react";
import PropTypes from 'prop-types';
import moment from 'moment';
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
    console.log(this.props.user)
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
    this.setState({
      submitting: false
    })
    // setTimeout(() => {
    //   this.setState({
    //     submitting: false,
    //     value: '',
    //     comments: [
    //       {
    //         authorName: this.props.authorName,
    //         content: this.state.value,
    //         dateTime: moment(),
    //       },
    //       ...this.state.comments,
    //     ],
    //   });
    // }, 500);
  };

  handleChange = value => {
    this.setState({
      value: value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
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

// UserCommentsSection.propTypes = {
//   authorName: PropTypes.string.isRequired,
//   commentList: PropTypes.array.isRequired,
//   userList: PropTypes.array.isRequired
// };

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps, null)(UserCommentsSection);

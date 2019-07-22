import React, { Component } from "react";
import UserCommentsSection from "../UserCommentsSection/UserCommentsSection";
import { UserComments } from "../UserCommentList/UserCommentList.stories";
import { UserList } from "../UserCommentEditor/UserCommentEditor.stories";

class UserCommentsPage extends Component {
  render() {
     return (
       <UserCommentsSection
         authorName="Mr Bean"
         commentList={UserComments}
         userList={UserList}
       />
    )
  }
}

export default UserCommentsPage;
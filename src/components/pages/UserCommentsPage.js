import React, { Component } from "react";
import UserCommentsSection from "../UserCommentsSection/UserCommentsSection";
import { UserComments } from "../UserCommentList/UserCommentList.stories";

class UserCommentsPage extends Component {
  render() {
     return (
       <UserCommentsSection
         authorName="Mr Bean"
         commentList={UserComments}
       />
    )
  }
}

export default UserCommentsPage;
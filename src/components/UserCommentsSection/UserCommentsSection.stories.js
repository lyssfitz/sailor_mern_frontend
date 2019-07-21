import React from 'react';
import { mount } from "enzyme";
import UserCommentsSection from "./UserCommentsSection";
import { UserComments } from "../UserCommentList/UserCommentList.stories";
import { UserList} from "../UserCommentEditor/UserCommentEditor.stories";

const AuthorName = "";

describe('UserCommentsSection', () => {

  it('should add a new comment to the list', () => {
    let component = mount(
      <UserCommentsSection
        authorName={AuthorName}
        commentList={UserComments}
        userList={UserList}
      />
    );

    // assert there are three comment to start with
    let commentContentElements = component.find('.ant-comment-content-author');
    expect(commentContentElements.length).toEqual(3);

    // add a new comment
    let userCommentEditor = component.find('UserCommentEditor').first();

    let textAreaComponent = userCommentEditor.find('textarea').first();
    textAreaComponent.simulate('change', {target: {value: 'abc'}});

    let buttonElement = userCommentEditor.find('button').first();
    buttonElement.simulate('click');

    // assert there are three comment to start with
    commentContentElements = component.find('.ant-comment-content-author');
    expect(commentContentElements.length).toEqual(4);

    // Todo: figure why this is not working, is there a better way?
  });
});

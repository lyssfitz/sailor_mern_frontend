import React from 'react';
import moment from 'moment';
import { mount } from "enzyme";
import UserCommentList from "./UserCommentList";
import { UserComments } from "./UserCommentList.stories";

describe('UserCommentList', () => {

  it('should display an empty list when no comments are provided', () => {
    let component = mount(<UserCommentList userComments={[]}/>);
    expect(component.props().userComments.length).toEqual(0);
    
    let listHeaderElement = component.find('.ant-list-header').first();
    expect(listHeaderElement.text()).toEqual("0 replies");

    let listDescriptionElement = component.find('.ant-empty-description').first();
    expect(listDescriptionElement.text()).toEqual("No Data");
  });

  it('should display one user comment', () => {
    let component = mount(<UserCommentList userComments={[UserComments[0]]}/>);
    expect(component.props().userComments.length).toEqual(1);
    
    let listHeaderElement = component.find('.ant-list-header').first();
    expect(listHeaderElement.text()).toEqual("1 reply");

    let commentContentElement = component.find('.ant-comment-content-author').first();
    expect(commentContentElement.text()).toMatch("Mary Smith");
  });

  it('should display multiple user comments', () => {
    let component = mount(<UserCommentList userComments={UserComments}/>);
    expect(component.props().userComments.length).toEqual(3);
    
    let listHeaderElement = component.find('.ant-list-header').first();
    expect(listHeaderElement.text()).toEqual("3 replies");

    let commentContentElements = component.find('.ant-comment-content-author');
    expect(commentContentElements.length).toEqual(3);
    
    for (let i = 0; i < UserComments.length; i++) {
      expect(commentContentElements.at(i).text()).toMatch(UserComments[i].authorName);
    }
  });
});
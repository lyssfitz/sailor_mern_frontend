import React from 'react';
import moment from 'moment';
import { mount } from "enzyme";
import UserComment from "./UserComment.jsx";

const authorName = "Mary Smith";
const content = "That was an excellent article!";
const dateTime = moment().subtract(1, 'hour');

describe('UserComment', () => {
  let component;

  beforeEach(() => {
    component = mount(
      <UserComment
        authorName={authorName}
        content={content}
        dateTime={dateTime}
      />);
  });

  it('should display the user name', () => {
    let authorNameElement = component.find('h4').first();
    expect(authorNameElement.text()).toEqual(authorName);
  });

  it('should display the user comment', () => {
    let contentElement = component.find('p').first();
    expect(contentElement.text()).toEqual(content);
  });

  it('should display the time that has passed since the user posted the comment', () => {
    let postDateElement = component.find('.ant-comment-content-author-time').first();
    expect(postDateElement.text()).toEqual("an hour ago");
  });
});
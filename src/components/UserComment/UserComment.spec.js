import React from 'react';
import { mount } from "enzyme";
import UserComment from "./UserComment.jsx";

describe('UserComment', () => {
  it('should display the user name', () => {
    component = mount(<UserComment/>)
    let authorName = component.find('.ant-comment-content-author-name');
  });

  it('should display the user comment', () => {
    
  });

  it('should display multiple user comments', () => {
    
  });

  it('should display a user comment on an existing comment', () => {
    
  });
  // let component;

  // beforeEach(() => {
  //   component = mount(<AddButton caption='Caption' subCaptions={['sub-caption 1', 'sub-caption 2']}/>)
  // });

  // it('should render a button with an plus symbol', () => {
  //   const buttons = component.find('Button');
  //   expect(buttons.length).toEqual(1);
  //   expect(buttons.find('Add').length).toEqual(1);
  // });

  // it('should render a caption', () => {
  //   const caption = component.find('p').at(0);
  //   expect(caption.text()).toEqual('Caption')
  // });

  // it('should render multiple sub-captions', () => {
  //   const subCaption1 = component.find('p').at(1);
  //   expect(subCaption1.text()).toEqual('sub-caption 1');
  //   const subCaption2 = component.find('p').at(2);
  //   expect(subCaption2.text()).toEqual('sub-caption 2');
  // });
});
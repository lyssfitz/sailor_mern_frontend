import React from 'react';
import { mount } from "enzyme";
import UserCommentEditor from "./UserCommentEditor";
import { UserList} from "../UserCommentEditor/UserCommentEditor.stories";

describe('UserCommentEditor', () => {

  let component;
  let mockOnSubmitCallback;
  let mockOnChangeCallback;

  beforeEach(() => {
    mockOnChangeCallback = jest.fn();
    mockOnSubmitCallback = jest.fn();

    component = mount(
      <UserCommentEditor
        onChange={mockOnChangeCallback}
        onSubmit={mockOnSubmitCallback}
        submitting={false}
        userList={UserList}
      />
    );
  });

  it('should notify when then submit button is clicked', () => {
    let buttonElement = component.find('button').first();
    buttonElement.simulate('click');
    expect(mockOnSubmitCallback.mock.calls.length).toBe(1);
  });

  it('should notify when the user types a comment', () => {
    let textAreaComponent = component.find('textarea').first();
    textAreaComponent.simulate('change', {target: {value: 'abc'}});
    expect(mockOnChangeCallback.mock.calls.length).toBe(1);
  });
});
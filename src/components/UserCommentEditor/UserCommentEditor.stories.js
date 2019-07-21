import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserCommentEditor from './UserCommentEditor'

export const Users = [
  "afc163",
  "zombieJ",
  "yesmeck",
];

export const actions = {
  onSubmit: action('onSubmit'),
  onChange: action('onChange')
};

storiesOf('UserCommentEditor', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserCommentEditor 
      submitting={false}
      value="That was a great article."
      users={Users}
      {...actions}
    />
  ))
;
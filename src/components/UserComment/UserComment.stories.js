import React from 'react';
import { storiesOf } from '@storybook/react';
import UserComment from './UserComment.jsx'


storiesOf('UserComment', module)
  .addDecorator(story => <div style={{padding: '3rem'}}>{story()}</div>)
  .add('default', () => (
    <UserComment/>
  ))
;
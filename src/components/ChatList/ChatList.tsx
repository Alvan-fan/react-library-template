import React from 'react';
import { Channel } from '../Channel';
import { RoomList } from '../RoomList';

// import ss from './index.scss';

export const ChatList = () => {
  return (
    <Channel>
      <RoomList />
    </Channel>
  );
};

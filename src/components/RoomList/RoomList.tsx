import React from 'react';
import { useChatActionContext } from '../../context/ChatActionContext';
import { useChatContext } from '../../context/ChatContext';

import ss from './index.scss';

export const RoomList = React.memo(() => {
  const { dispatch } = useChatActionContext();
  const { count } = useChatContext();
  return (
    <div className={ss.box}>
      RoomList: {count}
      <div
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        add count
      </div>
    </div>
  );
});

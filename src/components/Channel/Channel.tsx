import React, { useReducer, useMemo } from 'react';
import { ChatActionProvider } from 'context/ChatActionContext';
import { ChatProvider } from '../../context/ChatContext';
import { channelReducer, initialState } from './ChannelState';

export const Channel = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(channelReducer, initialState);

  const channelActionContextValue = useMemo(
    () => ({
      dispatch,
    }),
    [],
  );

  return (
    <ChatProvider value={state}>
      <ChatActionProvider value={channelActionContextValue}>{children}</ChatActionProvider>
    </ChatProvider>
  );
};

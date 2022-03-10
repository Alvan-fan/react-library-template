import React, { Dispatch, PropsWithChildren, useContext } from 'react';

export type ChatActionContextValue = {
  dispatch: Dispatch<{ type: string }>;
};

export const ChatActionContext = React.createContext<ChatActionContextValue | undefined>(undefined);

export const ChatActionProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ChatActionContextValue }>) => (
  <ChatActionContext.Provider value={value as unknown as ChatActionContextValue}>
    {children}
  </ChatActionContext.Provider>
);

export const useChatActionContext = (componentName?: string) => {
  const contextValue = useContext(ChatActionContext);

  if (!contextValue) {
    console.warn(
      `The useChatContext hook was called outside of the ChatActionContext provider. Make sure this hook is called within a child of the Chat component. The errored call is located in the ${componentName} component.`,
    );

    return {} as ChatActionContextValue;
  }

  // return contextValue as unknown as ChatActionContextValue;
  return contextValue as any;
};

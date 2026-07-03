import styled from "styled-components";

import { useChatViewModel } from "../viewmodel/useChatViewModel";
import { ChatHeader } from "./components/ChatHeader";
import { ChatMessageList } from "./components/ChatMessageList";
import { ChatComposer } from "./components/ChatComposer";

export function ChatPage() {
    const {
        messages,
        message,
        isLoading,
        isSending,
        isTyping,
        canSend,
        setMessage,
        sendMessage,
    } = useChatViewModel();

    return (
        <PageContainer>
            <ChatContainer>
                <ChatHeader />

                <ChatMessageList
                    messages={messages}
                    isLoading={isLoading}
                    isTyping={isTyping}
                />

                <ChatComposer
                    value={message}
                    disabled={isSending}
                    canSend={canSend}
                    onChange={setMessage}
                    onSend={sendMessage}
                />
            </ChatContainer>
        </PageContainer>
    );
}

const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ChatContainer = styled.section`
  width: 100%;
  max-width: 520px;
  height: 720px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
`;
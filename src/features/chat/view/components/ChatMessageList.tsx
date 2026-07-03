import { useRef } from "react";
import styled from "styled-components";

import { useAutoScroll } from "../../../../shared/hooks/useAutoScroll";
import { ChatMessage } from "../../model/chat.types";
import { ChatMessageItem } from "./ChatMessageItem";
import { TypingIndicator } from "./TypingIndicator";

interface ChatMessageListProps {
    messages: ChatMessage[];
    isLoading: boolean;
    isTyping: boolean;
}

export function ChatMessageList({
                                    messages,
                                    isLoading,
                                    isTyping,
                                }: ChatMessageListProps) {
    const listRef = useRef<HTMLDivElement>(null);

    useAutoScroll(listRef, [messages.length, isTyping]);

    if (isLoading) {
        return <StateContainer>Carregando mensagens...</StateContainer>;
    }

    return (
        <ListContainer ref={listRef}>
            {messages.map((message) => (
                <ChatMessageItem key={message.id} message={message} />
            ))}

            {isTyping && <TypingIndicator author="Ana" />}
        </ListContainer>
    );
}

const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
`;

const StateContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.muted};
`;
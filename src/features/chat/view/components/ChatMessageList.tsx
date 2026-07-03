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

    if (!messages.length) {
        return (
            <StateContainer>
                Nenhuma mensagem por aqui ainda.
            </StateContainer>
        );
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
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.surfaceSoft};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.colors.border};
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const StateContainer = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.surfaceSoft};
  color: ${({ theme }) => theme.colors.muted};
`;
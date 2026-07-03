import styled from "styled-components";

import { CURRENT_USER } from "../../model/chat.constants";
import { ChatMessage } from "../../model/chat.types";

interface ChatMessageItemProps {
    message: ChatMessage;
}

export function ChatMessageItem({ message }: ChatMessageItemProps) {
    const isCurrentUser = message.author === CURRENT_USER;

    const time = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    }).format(message.createdAt);

    return (
        <MessageRow $isCurrentUser={isCurrentUser}>
            <MessageBubble $isCurrentUser={isCurrentUser}>
                <MessageMeta $isCurrentUser={isCurrentUser}>
                    <strong>{isCurrentUser ? "Você" : message.author}</strong>
                    <span>{time}</span>
                </MessageMeta>

                <Text>{message.text}</Text>
            </MessageBubble>
        </MessageRow>
    );
}

const MessageRow = styled.div<{ $isCurrentUser: boolean }>`
  display: flex;
  justify-content: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "flex-end" : "flex-start"};
`;

const MessageBubble = styled.article<{ $isCurrentUser: boolean }>`
  max-width: 78%;
  padding: 12px 14px;
  border-radius: ${({ theme, $isCurrentUser }) =>
    $isCurrentUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};

  background: ${({ theme, $isCurrentUser }) =>
    $isCurrentUser ? theme.colors.sentBubble : theme.colors.receivedBubble};

  color: ${({ $isCurrentUser }) => ($isCurrentUser ? "#ffffff" : "inherit")};
  box-shadow: ${({ theme }) => theme.shadow.bubble};
`;

const MessageMeta = styled.div<{ $isCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: 6px;

  font-size: 12px;

  span {
    opacity: ${({ $isCurrentUser }) => ($isCurrentUser ? 0.8 : 0.6)};
    font-weight: 500;
  }
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.45;
`;
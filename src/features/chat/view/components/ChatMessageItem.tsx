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
            {!isCurrentUser && (
                <Avatar>
                    {message.author.charAt(0).toUpperCase()}
                </Avatar>
            )}

            <MessageContent $isCurrentUser={isCurrentUser}>
                <MessageMeta $isCurrentUser={isCurrentUser}>
                    <Author>{isCurrentUser ? "Você" : message.author}</Author>

                    <Time>{time}</Time>
                </MessageMeta>

                <MessageBubble $isCurrentUser={isCurrentUser}>
                    <Text>{message.text}</Text>
                </MessageBubble>
            </MessageContent>
        </MessageRow>
    );
}

const MessageRow = styled.div<{ $isCurrentUser: boolean }>`
  display: flex;
  justify-content: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "flex-end" : "flex-start"};

  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Avatar = styled.div`
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.radius.full};

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 14px;
  font-weight: 700;
`;

const MessageContent = styled.div<{ $isCurrentUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "flex-end" : "flex-start"};

  max-width: 75%;
`;

const MessageMeta = styled.div<{ $isCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: 6px;

  flex-direction: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "row-reverse" : "row"};
`;

const Author = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

const Time = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.muted};
`;

const MessageBubble = styled.div<{ $isCurrentUser: boolean }>`
  padding: 12px 16px;

  border-radius: ${({ $isCurrentUser }) =>
    $isCurrentUser
        ? "18px 18px 4px 18px"
        : "18px 18px 18px 4px"};

  background: ${({ theme, $isCurrentUser }) =>
    $isCurrentUser
        ? theme.colors.sentBubble
        : theme.colors.receivedBubble};

  color: ${({ $isCurrentUser }) =>
    $isCurrentUser ? "#fff" : "inherit"};

  box-shadow: ${({ theme }) => theme.shadow.bubble};
`;

const Text = styled.p`
  font-size: 15px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
`;
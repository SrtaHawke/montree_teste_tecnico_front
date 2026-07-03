import styled from "styled-components";

interface TypingIndicatorProps {
    author: string;
}

export function TypingIndicator({ author }: TypingIndicatorProps) {
    return (
        <Container>
            <Bubble>{author} está digitando...</Bubble>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Bubble = styled.div`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.receivedBubble};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;
`;
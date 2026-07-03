import styled, { keyframes } from "styled-components";

interface TypingIndicatorProps {
    author: string;
}

export function TypingIndicator({ author }: TypingIndicatorProps) {
    return (
        <Container>
            <Bubble>
                <Dots>
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots>
                <Text>{author} está digitando...</Text>
            </Bubble>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Bubble = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.receivedBubble};
  box-shadow: ${({ theme }) => theme.shadow.bubble};
`;

const Text = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const typing = keyframes`
    0%,
    80%,
    100% {
        transform: scale(.6);
        opacity: .35;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  animation: ${typing} 1.2s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: .2s;
  }
  &:nth-child(3) {
    animation-delay: .4s;
  }
`;
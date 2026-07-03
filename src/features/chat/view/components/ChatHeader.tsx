import styled from "styled-components";

export function ChatHeader() {
    return (
        <Header>
            <Profile>
                <Avatar>💬</Avatar>

                <div>
                    <Title>Mini Chat</Title>
                    <Subtitle>Conversa em tempo real simulada</Subtitle>
                </div>
            </Profile>

            <Status>
                <StatusDot />
                Online
            </Status>
        </Header>
    );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: rgba(255, 255, 255, 0.9);
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Avatar = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.primaryLight};
  font-size: 22px;
`;

const Title = styled.h1`
  font-size: 22px;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.muted};
`;

const Status = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.online};
  font-size: 13px;
  font-weight: 700;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.online};
`;
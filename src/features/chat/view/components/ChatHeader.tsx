import styled from "styled-components";
import {
    Bell,
    Search,
    Settings,
    Users,
} from "lucide-react";

import { ChatChannel } from "../../model/chat.channels";

interface ChatHeaderProps {
    channel: ChatChannel;
}

export function ChatHeader({ channel }: ChatHeaderProps) {
    const ChannelIcon = channel.icon;

    return (
        <Header>
            <Profile>
                <Avatar>
                    <ChannelIcon size={22} strokeWidth={2.2} />
                </Avatar>

                <Information>
                    <Title>{channel.name}</Title>

                    <Subtitle>
                        {channel.description} • {channel.members} membros
                    </Subtitle>
                </Information>
            </Profile>

            <Actions>
                <IconButton>
                    <Search size={18} />
                </IconButton>

                <IconButton>
                    <Bell size={18} />
                </IconButton>

                <IconButton>
                    <Users size={18} />
                </IconButton>
            </Actions>
        </Header>
    );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Avatar = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );

  color: white;
  box-shadow: 0 8px 18px rgba(37, 99, 235, 0.28);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const Subtitle = styled.span`
  margin-top: 4px;

  color: ${({ theme }) => theme.colors.muted};

  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.colors.muted};
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
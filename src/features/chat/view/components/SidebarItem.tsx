import styled from "styled-components";

import { ChatChannel } from "../../model/chat.channels";

interface SidebarItemProps {
    channel: ChatChannel;
    active: boolean;
    onClick: () => void;
}

export function SidebarItem({ channel, active, onClick }: SidebarItemProps) {
    const Icon = channel.icon;

    return (
        <Button
            type="button"
            $active={active}
            title={channel.name}
            onClick={onClick}
        >
            <Indicator $active={active} />
            <Icon size={22} strokeWidth={2.2} />
        </Button>
    );
}

const Button = styled.button<{ $active: boolean }>`
  position: relative;
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ $active }) => ($active ? "16px" : "50%")};
  background: ${({ $active }) => ($active ? "#5865f2" : "#313338")};
  color: #fff;

  transition: all 0.18s ease;

  &:hover {
    border-radius: 16px;
    background: #5865f2;
    transform: translateY(-2px);
  }
`;

const Indicator = styled.span<{ $active: boolean }>`
  position: absolute;
  left: -12px;

  width: ${({ $active }) => ($active ? "4px" : "0")};
  height: ${({ $active }) => ($active ? "24px" : "0")};

  border-radius: 999px;
  background: #fff;

  transition: all 0.18s ease;
`;
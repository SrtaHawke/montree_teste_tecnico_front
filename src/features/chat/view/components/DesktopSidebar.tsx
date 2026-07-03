import { Settings } from "lucide-react";
import styled from "styled-components";

import { ChatChannel } from "../../model/chat.channels";
import { SidebarItem } from "./SidebarItem";

interface DesktopSidebarProps {
    channels: ChatChannel[];
    selectedChannel: ChatChannel;
    onSelect: (channel: ChatChannel) => void;
    onOpenSettings: () => void;
}

export function DesktopSidebar({
                                   channels,
                                   selectedChannel,
                                   onSelect,
                                   onOpenSettings,
                               }: DesktopSidebarProps) {
    return (
        <Container>
            <Top>
                {channels.map((channel) => (
                    <SidebarItem
                        key={channel.id}
                        channel={channel}
                        active={selectedChannel.id === channel.id}
                        onClick={() => onSelect(channel)}
                    />
                ))}
            </Top>

            <Bottom>
                <Divider />

                <SettingsButton
                    type="button"
                    title="Configurações"
                    onClick={onOpenSettings}
                >
                    <Settings size={22} strokeWidth={2.2} />
                </SettingsButton>
            </Bottom>
        </Container>
    );
}

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 0;
  background: #1e1f22;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Divider = styled.div`
  width: 34px;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
`;

const SettingsButton = styled.button`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #313338;
  color: #fff;
  transition: all 0.18s ease;

  &:hover {
    border-radius: 16px;
    background: #5865f2;
    transform: translateY(-2px);
  }
`;
import { Settings } from "lucide-react";
import styled from "styled-components";

import { ChatChannel } from "../../model/chat.channels";
import { SidebarItem } from "./SidebarItem";

interface MobileSidebarProps {
    channels: ChatChannel[];
    selectedChannel: ChatChannel;
    onSelect: (channel: ChatChannel) => void;
    onOpenSettings: () => void;
}

export function MobileSidebar({
                                  channels,
                                  selectedChannel,
                                  onSelect,
                                  onOpenSettings,
                              }: MobileSidebarProps) {
    return (
        <Container>
            {channels.map((channel) => (
                <SidebarItem
                    key={channel.id}
                    channel={channel}
                    active={selectedChannel.id === channel.id}
                    onClick={() => onSelect(channel)}
                />
            ))}

            <SettingsButton
                type="button"
                title="Configurações"
                onClick={onOpenSettings}
            >
                <Settings size={22} strokeWidth={2.2} />
            </SettingsButton>
        </Container>
    );
}

const Container = styled.nav`
  display: none;

  @media (max-width: 768px) {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #1e1f22;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const SettingsButton = styled.button`
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #313338;
  color: #fff;
`;
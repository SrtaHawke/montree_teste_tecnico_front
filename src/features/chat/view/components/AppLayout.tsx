import styled from "styled-components";

import { ChatViewModel } from "../../viewmodel/chat.viewmodel";
import { ChatContent } from "./ChatContent";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { SettingsDrawer } from "./SettingsDrawer";

interface AppLayoutProps {
    viewModel: ChatViewModel;
}

export function AppLayout({ viewModel }: AppLayoutProps) {
    return (
        <Container $settingsOpen={viewModel.isSettingsOpen}>
            <DesktopSidebar
                channels={viewModel.channels}
                selectedChannel={viewModel.selectedChannel}
                onSelect={viewModel.selectChannel}
                onOpenSettings={viewModel.toggleSettings}
            />

            <ChatContent viewModel={viewModel} />

            <SettingsDrawer
                open={viewModel.isSettingsOpen}
                preferences={viewModel.preferences}
                onChangePreferences={viewModel.updatePreferences}
                onClose={viewModel.closeSettings}
            />

            <MobileSidebar
                channels={viewModel.channels}
                selectedChannel={viewModel.selectedChannel}
                onSelect={viewModel.selectChannel}
                onOpenSettings={viewModel.toggleSettings}
            />
        </Container>
    );
}

const Container = styled.main<{ $settingsOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  display: grid;

  grid-template-columns:
    72px
    minmax(0, 1fr)
    ${({ $settingsOpen }) => ($settingsOpen ? "340px" : "0px")};

  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  transition: grid-template-columns 0.25s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(0, 1fr) 72px;
  }
`;
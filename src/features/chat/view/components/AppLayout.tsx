import styled from "styled-components";

import { ChatViewModel } from "../../viewmodel/chat.viewmodel";
import { ChatSidebar } from "./ChatSidebar";
import { ChatContent } from "./ChatContent";
import { SettingsDrawer } from "./SettingsDrawer";

interface AppLayoutProps {
    viewModel: ChatViewModel;
}

export function AppLayout({ viewModel }: AppLayoutProps) {
    return (
        <Container $settingsOpen={viewModel.isSettingsOpen}>
            <ChatSidebar
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
        </Container>
    );
}

const Container = styled.main<{ $settingsOpen: boolean }>`
    width:100vw;
    height:100vh;
    display:grid;
    grid-template-columns:
        72px
        1fr
        ${({ $settingsOpen }) => ($settingsOpen ? "340px" : "0px")};
    transition:grid-template-columns .25s ease;
    overflow:hidden;
`;
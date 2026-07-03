import { ThemeProvider } from "styled-components";

import { ChatPage } from "../features/chat/view/ChatPage";
import { useChatViewModel } from "../features/chat/viewmodel/useChatViewModel";
import { GlobalStyle, createAppTheme } from "../style";

export default function App() {
    const viewModel = useChatViewModel();

    const appTheme = createAppTheme(
        viewModel.preferences.theme,
        viewModel.preferences.accentColor
    );

    return (
        <ThemeProvider theme={appTheme}>
            <GlobalStyle />
            <ChatPage viewModel={viewModel} />
        </ThemeProvider>
    );
}
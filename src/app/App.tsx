import { ThemeProvider } from "styled-components";

import { ChatPage } from "../features/chat/view/ChatPage";
import { GlobalStyle, theme } from "../style";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ChatPage />
        </ThemeProvider>
    );
}
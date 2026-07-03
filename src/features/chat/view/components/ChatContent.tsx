import styled from "styled-components";

import { ChatViewModel } from "../../viewmodel/chat.viewmodel";
import { ChatComposer } from "./ChatComposer";
import { ChatHeader } from "./ChatHeader";
import { ChatMessageList } from "./ChatMessageList";

interface ChatContentProps {
    viewModel: ChatViewModel;
}

export function ChatContent({ viewModel }: ChatContentProps) {
    return (
        <Container>
            <ChatHeader channel={viewModel.selectedChannel} />

            <ChatMessageList
                messages={viewModel.messages}
                isLoading={viewModel.isLoading}
                isTyping={viewModel.isTyping}
            />

            <ChatComposer
                value={viewModel.message}
                disabled={viewModel.isSending}
                canSend={viewModel.canSend}
                onChange={viewModel.setMessage}
                onSend={viewModel.sendMessage}
            />
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.surface};

    @media (max-width: 768px) {
        padding-bottom: 72px;
    }
`;
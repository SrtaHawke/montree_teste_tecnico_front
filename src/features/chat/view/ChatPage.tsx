import { ChatViewModel } from "../viewmodel/chat.viewmodel";
import { AppLayout } from "./components/AppLayout";

interface ChatPageProps {
    viewModel: ChatViewModel;
}

export function ChatPage({ viewModel }: ChatPageProps) {
    return <AppLayout viewModel={viewModel} />;
}
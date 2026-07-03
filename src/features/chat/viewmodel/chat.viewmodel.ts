import { ChatChannel } from "../model/chat.channels";
import { ChatPreferences } from "../model/chat.preferences";
import { ChatMessage } from "../model/chat.types";

export interface ChatViewModel {
    messages: ChatMessage[];
    message: string;
    isLoading: boolean;
    isSending: boolean;
    isTyping: boolean;
    canSend: boolean;
    channels: ChatChannel[];
    selectedChannel: ChatChannel;
    preferences: ChatPreferences;
    isSettingsOpen: boolean;
    setMessage: (value: string) => void;
    sendMessage: () => Promise<void>;
    selectChannel: (channel: ChatChannel) => void;
    updatePreferences: (preferences: Partial<ChatPreferences>) => void;
    toggleSettings: () => void;
    closeSettings: () => void;
}
import { useCallback, useEffect, useMemo, useState } from "react";

import {
    CURRENT_USER,
    INCOMING_MESSAGE_INTERVAL,
    MAX_MESSAGE_LENGTH,
} from "../model/chat.constants";
import { CHAT_CHANNELS, ChatChannel } from "../model/chat.channels";
import { ChatMessage } from "../model/chat.types";
import { chatMockService } from "../services/chat.mock.service";
import { ChatViewModel } from "./chat.viewmodel";
import { ChatPreferences } from "../model/chat.preferences";
import { preferencesService } from "../services/preferences.service";

export function useChatViewModel(): ChatViewModel {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState<ChatChannel>(
        CHAT_CHANNELS[0]
    );
    const [preferences, setPreferences] = useState<ChatPreferences>(() =>
        preferencesService.getPreferences()
    );

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const loadMessages = useCallback(async (channelId: string) => {
        setIsLoading(true);

        try {
            const response = await chatMockService.getMessages(channelId);
            setMessages(response);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const selectChannel = useCallback((channel: ChatChannel) => {
        setSelectedChannel(channel);
        setMessage("");
    }, []);

    const sendMessage = useCallback(async () => {
        const text = message.trim();

        if (!text || isSending) return;

        setIsSending(true);

        try {
            const newMessage = await chatMockService.createMessage(
                selectedChannel.id,
                {
                    author: CURRENT_USER,
                    text: text.slice(0, MAX_MESSAGE_LENGTH),
                }
            );

            setMessages((previous) => [...previous, newMessage]);
            setMessage("");
        } finally {
            setIsSending(false);
        }
    }, [message, isSending, selectedChannel.id]);

    const receiveIncomingMessage = useCallback(async () => {
        setIsTyping(true);

        try {
            const newMessage = await chatMockService.getNextIncomingMessage(
                selectedChannel.id
            );

            setMessages((previous) => [...previous, newMessage]);
        } finally {
            setIsTyping(false);
        }
    }, [selectedChannel.id]);

    const updatePreferences = useCallback(
        (partialPreferences: Partial<ChatPreferences>) => {
            const updatedPreferences =
                preferencesService.updatePreferences(partialPreferences);

            setPreferences(updatedPreferences);
        },
        []
    );

    const toggleSettings = useCallback(() => {
        setIsSettingsOpen((current) => !current);
    }, []);

    const closeSettings = useCallback(() => {
        setIsSettingsOpen(false);
    }, []);

    useEffect(() => {
        loadMessages(selectedChannel.id);
    }, [selectedChannel.id, loadMessages]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            receiveIncomingMessage();
        }, INCOMING_MESSAGE_INTERVAL);

        return () => window.clearInterval(interval);
    }, [receiveIncomingMessage]);

    const canSend = useMemo(() => {
        return message.trim().length > 0 && !isSending;
    }, [message, isSending]);

    return {
        messages,
        message,
        isLoading,
        isSending,
        isTyping,
        canSend,
        channels: CHAT_CHANNELS,
        selectedChannel,
        setMessage,
        sendMessage,
        selectChannel,
        preferences,
        isSettingsOpen,
        updatePreferences,
        toggleSettings,
        closeSettings,
    };
}
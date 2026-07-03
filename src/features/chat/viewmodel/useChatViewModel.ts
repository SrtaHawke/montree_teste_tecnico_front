import { useCallback, useEffect, useMemo, useState } from "react";

import { CURRENT_USER } from "../model/chat.constants";
import { ChatMessage } from "../model/chat.types";
import { chatMockService } from "../services/chat.mock.service";

export function useChatViewModel() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const loadMessages = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await chatMockService.getMessages();
            setMessages(response);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const sendMessage = useCallback(async () => {
        const text = message.trim();

        if (!text || isSending) return;

        setIsSending(true);

        try {
            const newMessage = await chatMockService.createMessage({
                author: CURRENT_USER,
                text,
            });

            setMessages((previous) => [...previous, newMessage]);
            setMessage("");
        } finally {
            setIsSending(false);
        }
    }, [message, isSending]);

    const receiveIncomingMessage = useCallback(async () => {
        setIsTyping(true);

        try {
            const newMessage = await chatMockService.getNextIncomingMessage();

            setMessages((previous) => [...previous, newMessage]);
        } finally {
            setIsTyping(false);
        }
    }, []);

    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    useEffect(() => {
        const interval = window.setInterval(() => {
            receiveIncomingMessage();
        }, 5000);

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
        setMessage,
        sendMessage,
    };
}
import { delay } from "../../../shared/utils/delay";
import { createMessageId } from "../../../shared/utils/createMessageId";
import { MOCK_API_DELAY } from "../model/chat.constants";
import {
    CHANNEL_INCOMING_MESSAGES,
    CHANNEL_MESSAGES,
} from "../model/chat.messages";
import { ChatMessage, CreateMessageDTO } from "../model/chat.types";

let messagesDatabase: Record<string, ChatMessage[]> = { ...CHANNEL_MESSAGES };

let incomingIndexes: Record<string, number> = {
    games: 0,
    work: 0,
    family: 0,
    friends: 0,
};

export const chatMockService = {
    async getMessages(channelId: string): Promise<ChatMessage[]> {
        await delay(MOCK_API_DELAY);

        return [...(messagesDatabase[channelId] ?? [])];
    },

    async createMessage(
        channelId: string,
        payload: CreateMessageDTO
    ): Promise<ChatMessage> {
        await delay(MOCK_API_DELAY);

        const newMessage: ChatMessage = {
            id: createMessageId(),
            author: payload.author,
            text: payload.text,
            createdAt: new Date(),
        };

        messagesDatabase[channelId] = [
            ...(messagesDatabase[channelId] ?? []),
            newMessage,
        ];

        return newMessage;
    },

    async getNextIncomingMessage(channelId: string): Promise<ChatMessage> {
        await delay(MOCK_API_DELAY);

        const incomingMessages = CHANNEL_INCOMING_MESSAGES[channelId] ?? [];

        if (!incomingMessages.length) {
            throw new Error("Nenhuma mensagem simulada disponível para este canal.");
        }

        const currentIndex = incomingIndexes[channelId] ?? 0;

        const incoming = incomingMessages[currentIndex];

        incomingIndexes[channelId] =
            currentIndex + 1 >= incomingMessages.length ? 0 : currentIndex + 1;

        const newMessage: ChatMessage = {
            id: createMessageId(),
            author: incoming.author,
            text: incoming.text,
            createdAt: new Date(),
        };

        messagesDatabase[channelId] = [
            ...(messagesDatabase[channelId] ?? []),
            newMessage,
        ];

        return newMessage;
    },
};
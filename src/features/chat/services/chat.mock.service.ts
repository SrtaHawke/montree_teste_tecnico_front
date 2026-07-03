import { delay } from "../../../shared/utils/delay";
import { createMessageId } from "../../../shared/utils/createMessageId";
import { INITIAL_MESSAGES, INCOMING_MESSAGES } from "../model/chat.constants";
import { ChatMessage, CreateMessageDTO } from "../model/chat.types";

let messages: ChatMessage[] = [...INITIAL_MESSAGES];
let incomingIndex = 0;

export const chatMockService = {
    async getMessages(): Promise<ChatMessage[]> {
        await delay(300);
        return [...messages];
    },

    async createMessage(payload: CreateMessageDTO): Promise<ChatMessage> {
        await delay(300);

        const newMessage: ChatMessage = {
            id: createMessageId(),
            author: payload.author,
            text: payload.text,
            createdAt: new Date(),
        };

        messages = [...messages, newMessage];

        return newMessage;
    },

    async getNextIncomingMessage(): Promise<ChatMessage> {
        await delay(300);

        if (incomingIndex >= INCOMING_MESSAGES.length) {
            incomingIndex = 0;
        }

        const incoming = INCOMING_MESSAGES[incomingIndex++];

        const newMessage: ChatMessage = {
            id: createMessageId(),
            author: incoming.author,
            text: incoming.text,
            createdAt: new Date(),
        };

        messages = [...messages, newMessage];

        return newMessage;
    },
};
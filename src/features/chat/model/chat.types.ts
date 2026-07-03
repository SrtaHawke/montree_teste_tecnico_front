export type MessageAuthor = string;

export interface ChatMessage {
    id: number;
    author: MessageAuthor;
    text: string;
    createdAt: Date;
}

export interface CreateMessageDTO {
    author: string;
    text: string;
}
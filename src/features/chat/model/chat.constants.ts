import { ChatMessage } from "./chat.types";

export const CURRENT_USER = "Você";

export const INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: 1,
        author: "João",
        text: "Olá, pessoal!",
        createdAt: new Date(),
    },
    {
        id: 2,
        author: "Maria",
        text: "Oi, João! Tudo bem?",
        createdAt: new Date(),
    },
    {
        id: 3,
        author: "João",
        text: "Tudo ótimo! E com você?",
        createdAt: new Date(),
    },
];

export const INCOMING_MESSAGES: Omit<ChatMessage, "id" | "createdAt">[] = [
    {
        author: "Ana",
        text: "Que legal esse chat!",
    },
    {
        author: "Pedro",
        text: "A interface ficou bem limpa.",
    },
    {
        author: "Maria",
        text: "Gostei da experiência!",
    },
];
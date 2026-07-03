import { ChatChannel } from "./chat.channels";
import { ChatMessage } from "./chat.types";

type ChannelId = ChatChannel["id"];

export const CHANNEL_MESSAGES: Record<ChannelId, ChatMessage[]> = {
    games: [
        {
            id: 1,
            author: "João",
            text: "Alguém anima jogar Valorant hoje à noite?",
            createdAt: new Date(),
        },
        {
            id: 2,
            author: "Maria",
            text: "Eu topo! Depois das 20h.",
            createdAt: new Date(),
        },
        {
            id: 3,
            author: "Pedro",
            text: "Vou chamar o restante da equipe.",
            createdAt: new Date(),
        },
    ],

    work: [
        {
            id: 4,
            author: "Carla",
            text: "A daily foi antecipada para as 9h.",
            createdAt: new Date(),
        },
        {
            id: 5,
            author: "Carlos",
            text: "Já subi a PR do módulo financeiro.",
            createdAt: new Date(),
        },
        {
            id: 6,
            author: "Fernanda",
            text: "Vou revisar ainda esta manhã.",
            createdAt: new Date(),
        },
    ],

    family: [
        {
            id: 7,
            author: "Mãe",
            text: "Domingo o almoço será aqui em casa ❤️",
            createdAt: new Date(),
        },
        {
            id: 8,
            author: "Pai",
            text: "Vou fazer churrasco.",
            createdAt: new Date(),
        },
        {
            id: 9,
            author: "Irmã",
            text: "Levo a sobremesa 😊",
            createdAt: new Date(),
        },
    ],

    friends: [
        {
            id: 10,
            author: "Lucas",
            text: "Cinema hoje?",
            createdAt: new Date(),
        },
        {
            id: 11,
            author: "Amanda",
            text: "Fechado! Qual horário?",
            createdAt: new Date(),
        },
        {
            id: 12,
            author: "Bruno",
            text: "Depois podemos jantar.",
            createdAt: new Date(),
        },
    ],
};

export const CHANNEL_INCOMING_MESSAGES: Record<
    ChannelId,
    Omit<ChatMessage, "id" | "createdAt">[]
> = {
    games: [
        {
            author: "Lucy",
            text: "Entrando na partida agora!",
        },
        {
            author: "João",
            text: "Já abri a sala.",
        },
        {
            author: "Pedro",
            text: "Só terminar essa aqui.",
        },
    ],

    work: [
        {
            author: "Carlos",
            text: "Deploy realizado com sucesso.",
        },
        {
            author: "Fernanda",
            text: "Produção validada.",
        },
        {
            author: "Marcos",
            text: "Vou abrir outra task.",
        },
    ],

    family: [
        {
            author: "Mãe",
            text: "Não esqueçam da sobremesa.",
        },
        {
            author: "Pai",
            text: "Já acendi a churrasqueira.",
        },
        {
            author: "Irmã",
            text: "Estou chegando.",
        },
    ],

    friends: [
        {
            author: "Lucas",
            text: "Reservei a mesa.",
        },
        {
            author: "Amanda",
            text: "Estou a caminho.",
        },
        {
            author: "Bruno",
            text: "Levei alguns jogos de tabuleiro.",
        },
    ],
};
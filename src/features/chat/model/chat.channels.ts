import {
    Briefcase,
    Gamepad2,
    Home,
    LucideIcon,
    Users,
} from "lucide-react";

export interface ChatChannel {
    id: string;
    name: string;
    description: string;
    members: number;
    icon: LucideIcon;
}

export const CHAT_CHANNELS: ChatChannel[] = [
    {
        id: "games",
        name: "Jogos",
        description: "Partidas, estratégias e diversão",
        members: 12,
        icon: Gamepad2,
    },
    {
        id: "work",
        name: "Trabalho",
        description: "Projetos, alinhamentos e entregas",
        members: 8,
        icon: Briefcase,
    },
    {
        id: "family",
        name: "Família",
        description: "Grupo de Família",
        members: 6,
        icon: Home,
    },
    {
        id: "friends",
        name: "Amigos",
        description: "Planos, rolês e conversas leves",
        members: 10,
        icon: Users,
    },
];
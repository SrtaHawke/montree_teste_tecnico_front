export type ThemeMode = "light" | "dark";

export type AccentColor =
    | "blue"
    | "purple"
    | "green"
    | "orange";

export interface ChatPreferences {
    username: string;
    theme: ThemeMode;
    accentColor: AccentColor;
}

export interface AccentTheme {
    id: AccentColor;
    name: string;
    color: string;
}

export const DEFAULT_CHAT_PREFERENCES: ChatPreferences = {
    username: "Você",
    theme: "dark",
    accentColor: "blue",
};

export const AVAILABLE_THEMES: ThemeMode[] = [
    "light",
    "dark",
];

export const AVAILABLE_ACCENT_THEMES: AccentTheme[] = [
    {
        id: "blue",
        name: "Azul",
        color: "#2563EB",
    },
    {
        id: "purple",
        name: "Roxo",
        color: "#7C3AED",
    },
    {
        id: "green",
        name: "Verde",
        color: "#16A34A",
    },
    {
        id: "orange",
        name: "Laranja",
        color: "#EA580C",
    },
];
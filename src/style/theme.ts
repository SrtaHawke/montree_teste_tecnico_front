import { AccentColor, ThemeMode } from "../features/chat/model/chat.preferences";

const accentMap: Record<AccentColor, string> = {
    blue: "#2563EB",
    purple: "#7C3AED",
    green: "#16A34A",
    orange: "#EA580C",
};

export function createAppTheme(themeMode: ThemeMode, accentColor: AccentColor) {
    const primary = accentMap[accentColor];

    return {
        colors: {
            background: themeMode === "dark" ? "#111214" : "#eef2ff",
            surface: themeMode === "dark" ? "#1f2128" : "#ffffff",
            surfaceSoft: themeMode === "dark" ? "#2b2d31" : "#f8fafc",

            primary,
            primaryDark: primary,
            primaryLight: themeMode === "dark" ? "#313338" : "#dbeafe",

            text: themeMode === "dark" ? "#f8fafc" : "#0f172a",
            muted: themeMode === "dark" ? "#9ca3af" : "#64748b",
            border: themeMode === "dark" ? "#333641" : "#e2e8f0",

            sentBubble: `linear-gradient(135deg, ${primary} 0%, ${primary} 100%)`,
            receivedBubble: themeMode === "dark" ? "#313338" : "#f1f5f9",

            online: "#22c55e",
        },

        spacing: {
            xs: "4px",
            sm: "8px",
            md: "16px",
            lg: "24px",
            xl: "32px",
        },

        radius: {
            sm: "8px",
            md: "14px",
            lg: "24px",
            full: "999px",
        },

        shadow: {
            card: "0 24px 70px rgba(15, 23, 42, 0.18)",
            input: "0 8px 20px rgba(15, 23, 42, 0.06)",
            bubble: "0 8px 18px rgba(15, 23, 42, 0.08)",
        },
    } as const;
}

export const theme = createAppTheme("dark", "blue");
export const theme = {
    colors: {
        background: "#eef2ff",
        backgroundGradient: "linear-gradient(135deg, #e0e7ff 0%, #f8fafc 45%, #dbeafe 100%)",

        surface: "#ffffff",
        surfaceSoft: "#f8fafc",

        primary: "#2563eb",
        primaryDark: "#1d4ed8",
        primaryLight: "#dbeafe",

        text: "#0f172a",
        muted: "#64748b",

        border: "#e2e8f0",

        sentBubble: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        receivedBubble: "#f1f5f9",

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
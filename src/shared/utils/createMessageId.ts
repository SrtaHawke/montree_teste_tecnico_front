export function createMessageId(): number {
    return Date.now() + Math.floor(Math.random() * 1000);
}
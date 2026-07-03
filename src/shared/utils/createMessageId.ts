let currentId = 1000;

export function createMessageId(): number {
    currentId += 1;
    return currentId;
}
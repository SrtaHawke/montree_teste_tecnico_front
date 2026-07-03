import { RefObject, useEffect } from "react";

export function useAutoScroll(
    ref: RefObject<HTMLElement | null>,
    dependencies: unknown[] = []
) {
    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        element.scrollTo({
            top: element.scrollHeight,
            behavior: "smooth",
        });
    }, dependencies);
}